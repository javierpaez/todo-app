import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='h-full flex items-center p-16'>
      <div className='container  mx-auto my-8 flex flex-col items-center justify-center px-5'>
        <div className='text-center max-w-md'>
          <h2 className='mb-8 text-9xl font-extrabold'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl md:text-3xl font-bold pb-8'>Not found page.</p>
          <Link
            to='/'
            className='px-8 py-3 font-bold rounded-md bg-teal-400 text-white hover:bg-teal-600'>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
