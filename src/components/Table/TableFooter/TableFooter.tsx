import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.td<TableFooterProps>`
  padding: 12px;
  text-align: center;
  font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f9f9f9')};
  color: ${({ disabled }) => (disabled ? '#888' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  colSpan
}) => {
  return (
    <StyledTableFooter disabled={disabled} colSpan={colSpan}>
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;