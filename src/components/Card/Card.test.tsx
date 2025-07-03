import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('renders with title and description', () => {
    render(
      <Card
        imageUrl="card.png"
        title="Test Title"
        description="Test Description"
      />
    );
    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test Description')).toBeVisible();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'card.png');
  });

  test('applies disabled style', () => {
    render(
      <Card
        imageUrl="card.png"
        title="Test"
        description="Disabled"
        disabled
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'card.png');
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('background-color: rgb(245, 245, 245)');
  });
});