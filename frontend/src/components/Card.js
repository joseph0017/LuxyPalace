import React from 'react';

const Card = ({cardImg, h1text, moreInfo}) => {
  return (
    <div>
      <div className='relative container mt-16 px-6 mx-auto'>
        <section className=' text-gray-800'>
          <div className='block rounded-lg shadow-lg bg-white'>
            <div className='flex flex-wrap items-center'>
              <div className='lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12'>
                <img src={cardImg} alt='Trendy Pants and Shoes' className='w-80 pl-6 pt-6 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg sm:w-150 md:ml-14 lg:ml-0'
                />
              </div>
              <div className='grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12'>
                <div className='px-6 py-12 md:px-12'>
                  <h1 className='text-6xl font-bold mb-4'>{h1text}</h1>
                  <p className='text-gray-500 mb-6'>
                    {moreInfo}
                  </p>
                  <p className='text-gray-500'>
                    Don't forget to visit our product page for inspiration and see what we have to offer
                  </p>
                </div>
                <button className='mb-10 rounded-full bg-slate-300 py-2 px-6 text-lg font-medium hover:bg-slate-200 sm:mb-10'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
