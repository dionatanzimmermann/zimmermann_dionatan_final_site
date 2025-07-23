import { StoryFn, Meta } from '@storybook/react-webpack5';
import TableRow from './TableRow';
import { TableCell } from '../TableCell';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<TableRowProps> = (args) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
      </TableRow>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
