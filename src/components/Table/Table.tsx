import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fff')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%) opacity(0.6)' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Table: React.FC<TableProps> = ({
  headers = [],
  data = [],
  footer = '',
  disabled = false
}) => {
  const hasContent = headers.length > 0 || data.length > 0 || footer !== '';

  if (!hasContent) return null;

  return (
    <StyledTable disabled={disabled}>
      {headers.length > 0 && (
        <thead>
          <TableRow disabled={disabled}>
            {headers.map((header, idx) => (
              <TableHeader key={`header-${idx}`} disabled={disabled}>
                {header}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
      )}

      {data.length > 0 && (
        <tbody>
          {data.map((row, rowIdx) => (
            <TableRow key={`row-${rowIdx}`} disabled={disabled}>
              {row.map((cell, cellIdx) => (
                <TableCell key={`cell-${cellIdx}`} disabled={disabled}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      )}

      {footer && (
        <tfoot>
          <TableRow disabled={disabled}>
            <TableFooter disabled={disabled} colSpan={headers.length || 1}>
              {footer}
            </TableFooter>
          </TableRow>
        </tfoot>
      )}
    </StyledTable>
  );
};

export default Table;