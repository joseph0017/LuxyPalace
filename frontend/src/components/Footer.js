import React from 'react';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <div className='conatiner bg-orange-300 pt-10 mt-16'>
      <div className='flex justify-evenly cursor-pointer'>
        <img src={twitter} alt='twitter' className='w-6 ml-10' />
        <img src={instagram} alt='instagram' className='w-6' />
        <img src={facebook} alt='facebook' className='w-6' />
      </div>
      <p className='mt-4'>
        copyright © 2023. All Right Reserved.
      </p>
    </div>

  );
};

export default Footer;
