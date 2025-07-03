import { StoryFn, Meta } from "@storybook/react-webpack5";
import HeroImage from './HeroImage';
import defaultHeroImg from './heroimage.png';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: { control: 'boolean' },
    imageUrl: { control: 'text' },
    headline: { control: 'text' },
    subheadline: { control: 'text' },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => {
  const srcToUse = args.imageUrl && args.imageUrl.trim() !== '' ? args.imageUrl : defaultHeroImg;
  return <HeroImage {...args} imageUrl={srcToUse} />;
};

export const Default = Template.bind({});
Default.args = {
  imageUrl: '',
  headline: 'Welcome to the Hero Section',
  subheadline: 'This is a beautiful intro',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};