import React from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'

const Nav = () => {
  

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='Site Logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <div className="-mt-1 ml-auto  z-100  ">
            <SuprSendInbox 
              workspaceKey= '2VCvY1ZowV858Mes4yDA'
              distinctId='Abcd'
              subscriberId='LbmuVfxpmF3Ce9hfEaZqo40OFdfEuMzOBfD-8sYTHXg'
            />
          </div>
          {/* <a href='/'>Explore now</a> */}
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='Menu' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
