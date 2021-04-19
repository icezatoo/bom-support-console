import { text } from '@storybook/addon-knobs';
import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => {
  const props: ButtonProps = {
    color: text('color', 'primary'),
  };

  return <Button color={props.color}>Button</Button>;
};
