import { StoryFn, Meta } from "@storybook/react-webpack5";
import Img from './Img';
import defaultImg from './img.png';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Img>;

const Template: StoryFn<typeof Img> = (args) => {
  const srcToUse = args.src && args.src.trim() !== '' ? args.src : defaultImg;
  return <Img {...args} src={srcToUse} />;
};

export const Default = Template.bind({});
Default.args = {
  src: '',
  alt: 'Placeholder Image',
  width: '300px',
  height: '200px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};