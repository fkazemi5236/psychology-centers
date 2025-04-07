import React from 'react';
import CenterCard from './CenterCard';

export default {
  title: 'Components/CenterCard',
  component: CenterCard,  
};

const Template = (args) => <CenterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'مرکز مشاوره تهران',
  address: 'تهران، خیابان ولیعصر، بلوار کشاورز',
  phone: '021-12345678',
  imageUrl: '/images/default-avatar.png',
}