import React from 'react';
import { Story, Meta } from '@storybook/react';

import LoadingIndicator, { LoadingIndicatorProps } from './component';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'atoms/LoadingIndicator',
  component: LoadingIndicator,
  decorators: [withDesign],
  argTypes: {}
} as Meta;

const Template: Story<LoadingIndicatorProps> = (args) => (
  <div style={{ height: 50 }}>
    <LoadingIndicator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  design: {
    type: 'figma'
    // url: 'https://www.figma.com/file/picLlABvGBcEEzwUFsA73v/2021-Design-System---Foundations?node-id=628%3A4'
  }
};
