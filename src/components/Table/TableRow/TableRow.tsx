import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : 'transparent')};
  &:nth-child(even) {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fafafa')};
  }
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  td {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  }
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false
}) => {
  return (
    <StyledTableRow disabled={disabled}>{children}</StyledTableRow>
  );
};

export default TableRow;