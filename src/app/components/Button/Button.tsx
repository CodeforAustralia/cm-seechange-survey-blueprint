import React from 'react';
import { ButtonProps } from './interfaces';
import { ButtonWrapper, ContentWrapper } from './styled';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, children, buttonType = 'primary', onClickButton, loading = false, ...others }, ref) => {
    return (
      <ButtonWrapper
        ref={ref}
        disabled={disabled || loading}
        buttonType={buttonType}
        data-disabled={disabled || undefined}
        data-loading={loading || undefined}
        onClick={onClickButton}
        {...others}>
        <ContentWrapper disabled={disabled} buttonType={buttonType}>
          {children}
        </ContentWrapper>
        {/* TO DO: add spinner component after it's done */}
      </ButtonWrapper>
    );
  }
);

Button.displayName = 'Button';

export default Button;
