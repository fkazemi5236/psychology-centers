import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};
