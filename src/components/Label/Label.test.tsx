import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('renders label with text', () => {
    render(<Label htmlFor="test" text="Test Label" />);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  test('does not render when text is empty', () => {
    const { container } = render(<Label htmlFor="test" text="" />);
    expect(container.firstChild).toBeNull();
  });

  test('applies disabled style when disabled', () => {
    render(<Label htmlFor="test" text="Disabled Label" disabled />);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveTextContent('Disabled Label');
    expect(label).toBeVisible();
    expect(label).toHaveStyle('background-color: rgb(245, 245, 245)');
  });
});