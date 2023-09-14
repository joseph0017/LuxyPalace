import React from 'react';

const Line = () => {
  return (
    <div>
      <div dir='ltr'>
        <div className='container bg-orange-300 pt-3 w-28 ml-130 absolute mt-5'></div>
      </div>
      <div dir='rtl'>
        <div className='container bg-orange-300 pt-3 w-28 mr-130 absolute mt-5'></div>
      </div>
      <div className='text-5xl mt-20 relative'>
        <h1>New for <b>2023</b></h1>
      </div>
    </div>
  );
};

export default Line;
