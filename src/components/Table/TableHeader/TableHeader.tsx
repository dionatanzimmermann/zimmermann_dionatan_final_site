import { TableCell } from '../TableCell';
import { TableHeaderProps } from './TableHeader.types';

const TableHeader: React.FC<TableHeaderProps> = ({
  children, disabled
}) => {
  return (
    <TableCell as="th" disabled={disabled}>
      {children}
    </TableCell>
  );
};

export default TableHeader;