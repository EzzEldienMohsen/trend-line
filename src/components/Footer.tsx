import React from 'react';
import { FirstFooterDiv, SecondFooterDiv } from '../subComponents';


const Footer: React.FC = () => {
  return (
    <div className="flex  flex-col justify-center items-center w-full relative bg-slate-400">
      <FirstFooterDiv />
      <SecondFooterDiv />
      <div className="w-full flex justify-center items-center py-6">
        © 2024 Trendline Solutions. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
