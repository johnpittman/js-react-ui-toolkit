import { Story, Meta } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import LoadingIndicator, { LoadingIndicatorProps } from './component';

export default {
  title: 'atoms/LoadingIndicator',
  component: LoadingIndicator,
  decorators: [withDesign],
  argTypes: {}
} as Meta;

const Template: Story<LoadingIndicatorProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start', height: 50 }}>
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
