import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0'>
      <div className='flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0'>
        <div className='w-80 sm:w-auto flex flex-col justify-start items-start'>
          <div>
            <p className='text-3xl xl:text-4xl font-semibold leading-9 text-gray-800'>
              Telus React Micro Frontend Challenge - Home
            </p>
          </div>
          <div className='mt-4 lg:w-4/5 xl:w-3/5'>
            <p className='text-base leading-6 text-gray-600'>By: Javier Páez</p>
          </div>
          <div className='mt-16 w-full'>
            <Link to='/todo'>
              <button className='px-4 rounded-md flex justify-between items-center w-full lg:w-72 h-14 text-teal-950 bg-teal-400 hover:shadow-lg'>
                <p className='text-xl font-bold leading-5 bg-teal-400 py-3 px-5 text-teal-950 rounded-lg transition duration-3000 cursor-pointer'>
                  See TODO MFE
                </p>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6.66663 16H25.3333'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M20 21.3333L25.3333 16'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M20 10.6667L25.3333 16'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
