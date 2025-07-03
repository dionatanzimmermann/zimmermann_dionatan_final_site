import { StoryFn, Meta } from "@storybook/react-webpack5";
import Table from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
    headers: { control: 'object' },
    data: { control: 'object' },
    footer: { control: 'text' },
  },
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Email'],
  data: [
    ['Dionatan', '28', 'dionatan@rrc.ca'],
    ['Jenna', '32', 'jenna@rrc.ca'],
    ['Bob', '22', 'bob@rrc.ca']
  ],
  footer: '3 users',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};