import { StoryFn, Meta } from "@storybook/react-webpack5";
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Username',
  htmlFor: 'username-input',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};