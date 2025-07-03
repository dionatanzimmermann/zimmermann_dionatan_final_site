import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';
import { TableCell } from '../TableCell';

describe('TableRow', () => {
  test('renders children cells', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeVisible();
  });

  test('applies disabled styles', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <TableCell>Data</TableCell>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText('Data').parentElement).toHaveStyle('opacity: 0.6');
    expect(screen.getByText('Data').parentElement).toBeVisible();
    expect(screen.getByText('Data').parentElement).toHaveStyle('background-color: #ccc');
  });
});