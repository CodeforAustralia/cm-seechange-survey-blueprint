// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './interfaces';

const meta = {
  component: Button,
  title: 'Button'
} as Meta;

export default meta;

export const Base: StoryFn<ButtonProps> = args => {
  return <Button {...args} />;
};

Base.args = {
  disabled: false,
  buttonType: 'primary',
  loading: false,
  children: 'Demo Button'
};

Base.argTypes = {
  onClick: { action: 'button-click' },
  onBlur: { action: 'button-blur' },
  type: {
    control: {
      type: 'select',
      options: ['button', 'submit', 'reset']
    },
    description: 'Optional button [type] attribute'
  },
  buttonType: {
    control: {
      type: 'select',
      options: ['primary', 'secondary']
    },
    description: 'Optional button color variant'
  },
  disabled: {
    control: {
      type: 'boolean'
    },
    description: 'Optional is the button disabled'
  },
  loading: {
    control: {
      type: 'boolean'
    },
    description: 'Optional is the button disabled'
  }
};
