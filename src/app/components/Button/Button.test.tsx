// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ButtonProps } from './interfaces';
import { itRendersChildren } from '../utils/test-helper/it-renders-children';

const defaultProps: ButtonProps = {};

describe('Button', () => {
  itRendersChildren(Button, defaultProps);

  it('renders button component', () => {
    render(
      <Button>
        <span>Submit</span>
      </Button>
    );
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  it('passes disabled to button component', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });
  it('sets data-loading attribute based on loading prop', () => {
    render(<Button loading />);
    expect(screen.getByRole('button')).toHaveAttribute('data-loading');
  });

  it('handles triggering onClick event', () => {
    const mockClickButton = jest.fn();
    render(<Button onClick={mockClickButton} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickButton).toHaveBeenCalled();
  });
});
