import React from 'react';
import logoSrc from '../assets/svgs/icons/logo.svg';
import { BigNavBar, ButtonsHeader, SmallNavBar } from '../subComponents';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 w-full">
      <img src={logoSrc} alt="alt" className='w-1/4 md:w-auto '/>
      <BigNavBar />
      <ButtonsHeader/>
      <SmallNavBar/>
    </div>
  );
};

export default Header;
