import { Story, Meta } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import Tag, { TagProps } from './component';

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
