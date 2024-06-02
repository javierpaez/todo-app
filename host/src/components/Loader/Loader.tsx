import React from "react";

const Loader = () => {
  return (
    <div className='min-w-full h-screen flex items-center justify-center border-4'>
      <div className='space-x-1 flex justify-center items-center text-sm text-gray-700'>
        <svg fill='none' className='animate-spin w-6 h-6' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
          <path
            clip-rule='evenodd'
            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
            fill='currentColor'
            fill-rule='evenodd'
          />
        </svg>

        <div className='text-xl font-semibold'>Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
