import React from 'react'
import logoSrc from '../assets/svgs/icons/logo.svg';
import { Link } from 'react-router-dom';

const place: string =
  'absolute left-1/2 w-4/5  transform -translate-x-1/2 -top-[25%] md:-top-[20%] lg:-top-0 lg:translate-y-[-50%]';
const position: string =
  'flex flex-col  py-4 justify-center items-center gap-y-2 rounded-2xl';
const FirstFooterDiv :React.FC = () => {
  return (
    <div className={`${place} ${position} bg-rose-300`}>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center capitalize font-medium">
        move even faster{' '}
        <span>
          <img src={logoSrc} alt="alt" className="w-1/4 md:w-auto inline " />
        </span>
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center capitalize font-medium">
        your guide in digital age
      </h1>
      <div className="mt-2 flex flex-col justify-center items-center md:flex-row gap-y-2 md:gap-x-4 md:gap-y-0 md:justify-evenly w-1/2">
        <Link
          to="/"
          className="btn rounded-full flex justify-center items-center px-10 capitalize"
        >
          Let's talk
        </Link>
        <Link
          to="/"
          className="btn rounded-full flex justify-center items-center px-24  capitalize"
        >
          book your consultation
        </Link>
      </div>
    </div>
  );
}

export default FirstFooterDiv