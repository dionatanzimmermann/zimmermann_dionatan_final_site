import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders the button', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeVisible();
  });

  test('has greyed out background when disabled', () => {
render(<Button text="Disabled" disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toHaveStyle('background-color: #ccc');
  });
});