import React, { FC } from 'react';
import { ButtonPrimary, ButtonSecondary, StyledButton } from './Button.styled';

export enum Color {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = {
  color?: string;
  children?: React.ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ color = 'default', children, onClick }) => {
  switch (color) {
    case Color.primary:
      return (
        <ButtonPrimary data-testid="color-primary" onClick={onClick}>
          {children}
        </ButtonPrimary>
      );

    case Color.secondary:
      return (
        <ButtonSecondary data-testid="color-secondary" onClick={onClick}>
          {children}
        </ButtonSecondary>
      );

    default:
      return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }
};

export { Button };
