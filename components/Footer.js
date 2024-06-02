import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#fdfdfd]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10">
        <div className="flex flex-col gap-4 items-start">
          <img className='h-10' src="/assets/logo.svg" alt="" />
          <div className="flex gap-2 items-start">
            <img src="/assets/email.svg" alt="" />
            <p className='text-lg font-medium'>help@frybix.com</p>
          </div>
          <div className="flex gap-2 items-start">
            <img src="/assets/phone.svg" alt="" />
            <p className='text-lg font-medium'>+1 234 456 678 89</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className='text-4xl font-semibold'>Links</p>
          <p className='text-xl font-medium'>Home</p>
          <p className='text-xl font-medium'>About Us</p>
          <p className='text-xl font-medium'>Bookings</p>
          <p className='text-xl font-medium'>Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className='text-4xl font-semibold'>Legal</p>
          <p className='text-xl font-medium'>Terms Of Use</p>
          <p className='text-xl font-medium'>Privacy Policy</p>
          <p className='text-xl font-medium'>Cookie Policy</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className='text-4xl font-semibold'>Product</p>
          <p className='text-xl font-medium'>Take Tour</p>
          <p className='text-xl font-medium'>Live Chat</p>
          <p className='text-xl font-medium'>Reviews</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className='text-4xl font-semibold'>News Letter</p>
          <p className='text-xl font-medium'>Stay Up To Date</p>
          <div className="flex items-center flex-row gap-2">
            <input type="text" className="px-3 py-3 bg-white" placeholder="Your email" />
            <button className="bg-black text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary px-4 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300"/>
      <div className="container mx-auto py-4 text-center">
        <p>Copyright 2022 uifry.com all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
