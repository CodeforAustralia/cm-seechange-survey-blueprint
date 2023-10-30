import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'secondary';

export interface ContentProps {
  /** Disabled state */
  disabled?: boolean;

  /** The type of the button, the default value is 'primary') */
  buttonType?: ButtonType;

  /** Indicate loading state */
  loading?: boolean;

  /** Button label */
  children?: React.ReactNode;

  /** Optional callback for when clicking the button */
  onClickButton?: () => void;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ContentProps;
