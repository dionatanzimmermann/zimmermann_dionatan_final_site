import { StoryFn, Meta } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableHeader>;

const Template: StoryFn<TableHeaderProps> = (args) => (
  <table>
    <thead>
      <tr>
        <TableHeader {...args} />
      </tr>
    </thead>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Column Header',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
