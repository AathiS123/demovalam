// components/QuerySection.js
import React from 'react';

const QuerySection = ({ queryData }) => {
  const { Title, Button, CallusNum1, CallusNum2, BgImage } = queryData;

  const imageUrl = `http://localhost:1337${BgImage?.data[0]?.attributes?.url}`;

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})`, height: '400px' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white py-32 px-4">
        <h2 className="text-3xl font-bold">{Title}</h2>
        <div className='flex justify-center space-x-4'>
          <p className="mt-6 text-lg">{CallusNum1}</p>
          <p className="mt-6 text-lg">{CallusNum2}</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-[#B93177]  text-[#fff] rounded-md ">
          {Button}
        </button>
      </div>
    </div>
  );
};

export default QuerySection;
