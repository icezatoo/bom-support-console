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
};

const Button: FC<ButtonProps> = ({ color = 'default', children }) => {
  switch (color) {
    case Color.primary:
      return (
        <ButtonPrimary data-testid="color-primary">{children}</ButtonPrimary>
      );

    case Color.secondary:
      return (
        <ButtonSecondary data-testid="color-secondary">
          {children}
        </ButtonSecondary>
      );

    default:
      return <StyledButton>{children}</StyledButton>;
  }
};

export { Button };
