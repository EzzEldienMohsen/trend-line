import React from 'react';
import world from '../assets/svgs/pages/footer/world.svg';
const FourthFooterColumn: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-y-3 mt-6 lg:mt-0">
      <h1 className="text-xl md:text-lg lg:text-2xl uppercase">OUR Location</h1>
      <img src={world} alt="world" />
    </div>
  );
};

export default FourthFooterColumn;
