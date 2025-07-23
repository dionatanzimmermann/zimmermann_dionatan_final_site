import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import { TableRow } from '../TableRow';

describe('TableFooter', () => {
  test('renders content', () => {
    render(
      <table>
        <tfoot>
          <TableRow>
            <TableFooter>Summary</TableFooter>
          </TableRow>
        </tfoot>
      </table>
    );
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeVisible();
  });

  test('applies disabled styles', () => {
    render(
      <table>
        <tfoot>
          <TableRow>
            <TableFooter disabled>Summary</TableFooter>
          </TableRow>
        </tfoot>
      </table>
    );
    expect(screen.getByText('Summary')).toBeVisible();
    expect(screen.getByText('Summary')).toHaveStyle('background-color: #ccc');
  });

  test('spans columns', () => {
    render(
      <table>
        <tfoot>
          <TableRow>
            <TableFooter colSpan={3}>Summary</TableFooter>
          </TableRow>
        </tfoot>
      </table>
    );
    expect(screen.getByText('Summary')).toHaveAttribute('colspan', '3');
    expect(screen.getByText('Summary')).toBeVisible();
  });
});
