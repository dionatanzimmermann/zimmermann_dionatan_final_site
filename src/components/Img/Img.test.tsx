import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
  test('renders image when src is provided', () => {
    render(<Img src="img.jpg" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeVisible();
  });

  test('does not render when src is empty', () => {
    const { container } = render(<Img src="" alt="No image" />);
    expect(container.firstChild).toBeNull();
  });

  test('applies disabled styles when disabled is true', () => {
    render(<Img src="img.jpg" alt="Test" disabled />);
    const img = screen.getByAltText('Test');
    expect(screen.getByRole('img')).toBeVisible();
    expect(img).toHaveAttribute('src', 'img.jpg');
    expect(img).toHaveStyle('filter: grayscale(100%) opacity(0.6)');
  });
});