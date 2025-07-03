import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
  test('renders content', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeVisible();
  });

  test('applies disabled styles', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Test</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cell = screen.getByText('Test');
    expect(cell).toHaveStyle('color: #888');
    expect(cell).toHaveStyle('cursor: not-allowed');
    expect(cell).toBeVisible();
    expect(cell).toHaveStyle('color: #888');
    expect(cell).toHaveStyle('background: transparent');
  });

  test('renders as <th> with header styles', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableCell as="th">Header</TableCell>
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Header').tagName).toBe('TH');
    expect(screen.getByText('Header')).toHaveStyle('background-color: #f0f0f0');
    expect(screen.getByText('Header')).toBeVisible();
  });
});