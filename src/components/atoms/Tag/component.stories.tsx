import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tag, { TagProps } from './component';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'atoms/Tag',
  component: Tag,
  decorators: [withDesign],
  argTypes: {}
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  accentBar: true,
  label: 'Tag'
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/picLlABvGBcEEzwUFsA73v/2021-Design-System---Foundations?node-id=628%3A4'
  }
};
