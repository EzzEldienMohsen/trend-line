import React from 'react'
import { firstFooterLinks } from '../assets';
import { footerColumnLinks} from '../assets/types';
const FirstFooterColumn :React.FC= () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-y-3 lg:w-1/5">
      <h1 className="text-xl md:text-lg lg:text-2xl uppercase">company info</h1>
      <p className=''>
        Our web development team leverages the latest technologies and industry
        best practices to create custom websites that are not only visually
        stunning but also user-friendly and optimized for performance.
      </p>
      <div className="flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-x-4 md:w-full lg:w-auto lg:gap-y-2 lg:flex-col lg:items-start">
        {firstFooterLinks.map((link: footerColumnLinks) => {
          return (
            <div
              key={link.id}
              className="flex justify-center items-center gap-x-2"
            >
              <img src={link.img} alt={link.title} />
              <div>
                <p>{link.title}</p>
                <p>{link.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FirstFooterColumn