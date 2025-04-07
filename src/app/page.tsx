import React from 'react';
import CenterList from '../components/CenterList';

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">مراکز روانشناسی</h1>
        <CenterList />
      </div>
    </>
  );
};
export default HomePage;