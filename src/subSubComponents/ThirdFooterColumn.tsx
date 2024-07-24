import React from 'react';
import { thirdFooter } from '../assets';
import { page } from '../assets/types';
import { Link } from 'react-router-dom';

const ThirdFooterColumn: React.FC = () => {
  return (
    <div className="lg:flex flex-col hidden items-start gap-y-3 mt-6 lg:mt-0">
      <h1 className="text-xl md:text-lg lg:text-2xl uppercase">OUR SERVICES</h1>
      <div className='hidden lg:flex flex-col justify-start items-start gap-y-3'>
        {thirdFooter.map((link:page)=>{
            return <Link key={link.id} to={link.to} >
                {link.title}
            </Link>
        })}
      </div>
    </div>
  );
};

export default ThirdFooterColumn;
