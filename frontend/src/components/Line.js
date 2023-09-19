import React from 'react';

const Line = () => {
  return (
    <div>
      <div dir='ltr'>
        <div className='container bg-orange-300 pt-3 w-10  absolute mt-5 sm:ml-36 md:ml-20 md:w-36 lg:ml-56 xl:ml-80 2xl:ml-128'></div>
      </div>
      <div dir='rtl'>
        <div className='container bg-orange-300 pt-3 w-10 absolute mt-5 sm:mr-36 md:mr-20 md:w-36 lg:mr-56 xl:mr-80 2xl:mr-128'></div>
      </div>
      <div className='text-4xl mt-20 relative md:text-5xl'>
        <h1>New for <b>2023</b></h1>
      </div>
    </div>
  );
};

export default Line;
