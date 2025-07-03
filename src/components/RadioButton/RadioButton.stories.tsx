import { useState } from 'react';
import { StoryFn, Meta } from "@storybook/react-webpack5";
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const options = [
  { label: 'Option One', value: 'option1' },
  { label: 'Option Two', value: 'option2' },
  { label: 'Option Three', value: 'option3' },
];

const Template: StoryFn<typeof RadioButton> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <RadioButton
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
  value: 'option1',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options,
  value: 'option1',
  disabled: true,
};

export const Empty = Template.bind({});
Empty.args = {
  options,
  value: '',
  disabled: false,
};