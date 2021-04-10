import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tag, { TagProps } from './component';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'core/Tag',
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
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5'
  }
};
