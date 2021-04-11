import { Story, Meta } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import Button, { ButtonProps } from './component';

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {}
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};
Default.parameters = {
  design: {
    type: 'figma'
    // url: 'https://www.figma.com/file/picLlABvGBcEEzwUFsA73v/2021-Design-System---Foundations?node-id=628%3A4'
  }
};
