import { StoryFn, Meta } from '@storybook/react-webpack5';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Text',
  disabled: false,
  color: '#000000',
  fontSize: '1rem',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
  disabled: true,
};
