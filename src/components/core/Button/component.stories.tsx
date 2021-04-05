import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  size: 'large',
  label: 'Button',
  backgroundColor: '#3c1b1b'
};
