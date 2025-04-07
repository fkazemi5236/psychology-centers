import React from 'react';
import CenterList from './CenterList';
import { Meta, Story } from '@storybook/react';

const mockCenters = [
  {
    detail: {
      title: 'مرکز روانشناسی اول',
      address: 'تهران، میدان انقلاب',
      phone_numbers: ['021-12345678'],
    },
    manager: {
      avatar: [
        {
          url: '/images/default-avatar.png',
        },
      ],
    },
  },
  {
    detail: {
      title: 'مرکز روانشناسی دوم',
      address: 'تهران، خیابان ولیعصر',
      phone_numbers: ['021-23456789'],
    },
    manager: {
      avatar: [
        {
          url: '/images/default-avatar.png',
        },
      ],
    },
  },
];

export default {
  title: 'Components/CenterList',
  component: CenterList,
  argTypes: {
    centers: { control: 'object' },
  },
} as Meta;

const Template: Story = (args) => {
  return <CenterList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  centers: mockCenters,
};