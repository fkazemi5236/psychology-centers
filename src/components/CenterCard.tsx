import React from 'react';

interface CenterCardProps {
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
}

const CenterCard: React.FC<CenterCardProps> = ({ name, address, phone, imageUrl }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md flex items-center space-x-4">
      <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full" />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{address}</p>
        <p className="text-gray-500">{phone}</p>
      </div>
    </div>
  );
};

export default CenterCard;