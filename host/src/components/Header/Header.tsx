import React from 'react';
import { RxGithubLogo } from 'react-icons/rx';

const Header = () => {
  return (
    <div className='flex justify-between w-full bg-gray-800'>
      <div className='text-white text-xl p-4'>Telus MFE Challenge - Host APP</div>
      <div className='text-white text-xl p-4'>
        <a href='https://github.com/javierpaez' target='_blank' rel='noopener noreferrer'>
          <RxGithubLogo />
        </a>
      </div>
    </div>
  );
};

export default Header;
