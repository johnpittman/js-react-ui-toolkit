import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import Text, { TextProps } from './component';

export default {
  title: 'atoms/Text',
  component: Text,
  decorators: [withDesign],
  argTypes: {}
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>Text</Text>;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/picLlABvGBcEEzwUFsA73v/2021-Design-System---Foundations?node-id=270%3A0'
  }
};
