import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeTruthy();
  });

  it('should be render the color is primary', () => {
    const { getByTestId } = render(<Button color="primary" />);
    expect(getByTestId('color-primary')).toBeTruthy();
  });

  it('should be render the color is secondary', () => {
    const { getByTestId } = render(<Button color="secondary" />);
    expect(getByTestId('color-secondary')).toBeTruthy();
  });
});
