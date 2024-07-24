import React from 'react'
import {
  FirstFooterColumn,
  FourthFooterColumn,
  SecondFooterColumn,
  ThirdFooterColumn,
} from '../subSubComponents';

const SecondFooterDiv :React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 md:pt-24 pb-4 lg:flex-row lg:pt-28 lg:items-start lg:justify-between w-4/5">
      <FirstFooterColumn />
      <SecondFooterColumn />
      <ThirdFooterColumn />
      <FourthFooterColumn />
    </div>
  );
}

export default SecondFooterDiv