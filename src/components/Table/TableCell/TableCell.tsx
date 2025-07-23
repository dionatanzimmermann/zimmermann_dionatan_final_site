import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  color: ${({ disabled }) => (disabled ? '#888' : '#555')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  background: ${({ disabled, as }) => (as === 'th' ? (disabled ? '#ccc' : '#f0f0f0') : 'transparent')};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled = false, as = 'td' }) => {
  return (
    <StyledTableCell as={as} disabled={disabled}>
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
