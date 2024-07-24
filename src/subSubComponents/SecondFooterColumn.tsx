import React from 'react';
import { footerColumnLinks } from '../assets/types';
import { secondFooterLinks } from '../assets';

const SecondFooterColumn: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-y-3 mt-6 lg:mt-0">
      <h1 className="text-xl md:text-lg lg:text-2xl uppercase">Contact info</h1>
      <div className="flex  justify-evenly gap-x-4 md:w-full lg:w-auto lg:gap-y-2 lg:flex-col lg:items-start">
        {secondFooterLinks.map((link: footerColumnLinks) => {
          return (
            <div
              key={link.id}
              className="flex justify-center items-center gap-x-2"
            >
              <img src={link.img} alt={link.title} />
              <p>{link.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondFooterColumn;
