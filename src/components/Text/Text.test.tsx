import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders children content', () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText('Test Text')).toBeVisible();
  });

  it('applies disabled styles and cursor', () => {
    const { container } = render(<Text disabled>Disabled Text</Text>);
    const span = container.querySelector('span');
    expect(span).toHaveStyle('cursor: not-allowed');
    expect(span).toHaveStyle('color: #888');
    expect(span).toBeVisible();
  });
});