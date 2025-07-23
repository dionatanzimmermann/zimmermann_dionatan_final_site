import { StoryFn, Meta } from '@storybook/react-webpack5';
import Card from './Card';
import defaultImg from './card.png';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => {
  const srcToUse = args.imageUrl && args.imageUrl.trim() !== '' ? args.imageUrl : defaultImg;
  return <Card {...args} imageUrl={srcToUse} />;
};

export const Default = Template.bind({});
Default.args = {
  imageUrl: '',
  title: 'Card Title',
  description: 'This is a description for the card.',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
