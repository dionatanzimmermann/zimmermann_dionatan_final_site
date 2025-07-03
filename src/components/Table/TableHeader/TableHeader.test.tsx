import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('renders as <th> with header content', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Name').tagName).toBe('TH');
    expect(screen.getByText('Name')).toBeVisible();
  });

  test('applies disabled state', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader disabled>Age</TableHeader>
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Age')).toHaveStyle('color: #888');
    expect(screen.getByText('Age')).toBeVisible();
    expect(screen.getByText('Age')).toHaveStyle('background-color: #ccc');
  });
});