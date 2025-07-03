import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  test('renders the hero image with headline', () => {
    render(
      <HeroImage
        imageUrl="heroimage.png"
        headline="Test Headline"
        subheadline="Subhead"
      />
    );
    expect(screen.getByRole('img')).toBeVisible();
    expect(screen.getByText('Test Headline')).toBeInTheDocument();
  });

  test('applies disabled style when disabled is true', () => {
    render(
      <HeroImage
        imageUrl="heroimage.png"
        headline="Test"
        subheadline="Test sub"
        disabled
      />
    );
    const img = screen.getByRole('img');
    expect(screen.getByRole('img')).toBeVisible();
    expect(img).toHaveAttribute('src', 'heroimage.png');
    const herocontainer = screen.getByTestId('herocontainer');
    expect(herocontainer).toHaveStyle('filter: grayscale(100%) opacity(0.6)');
  });
});