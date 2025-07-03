import { StoryFn, Meta } from "@storybook/react-webpack5";
import TableCell  from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    disabled: { control: 'boolean' },
    as: {
      control: 'select',
      options: ['td', 'th']
    },
  },
} as Meta<typeof TableCell>;

const Template: StoryFn<TableCellProps> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Cell Content',
  disabled: false,
  as: 'td',
};

export const HeaderCell = Template.bind({});
HeaderCell.args = {
  ...Default.args,
  as: 'th',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};