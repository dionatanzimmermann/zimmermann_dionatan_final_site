import { StoryFn, Meta } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';
import { TableRow } from '../TableRow';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
    colSpan: { control: 'number' },
  },
} as Meta<typeof TableFooter>;

const Template: StoryFn<TableFooterProps> = (args) => (
  <table>
    <tfoot>
      <TableRow>
        <TableFooter {...args} />
      </TableRow>
    </tfoot>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Footer Content',
  disabled: false,
  colSpan: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
