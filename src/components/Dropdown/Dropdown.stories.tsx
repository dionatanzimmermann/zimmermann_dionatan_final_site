import {useState} from 'react';
import { StoryFn, Meta } from "@storybook/react-webpack5";
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <Dropdown
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 'option1',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'option1',
  disabled: true,
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  disabled: false,
};