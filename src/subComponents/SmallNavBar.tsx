import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import lightSrc from '../assets/svgs/icons/lightThreeBars.svg';
import darkSrc from '../assets/svgs/icons/darkThreeBars.svg';
import { pages } from '../assets';
import { page } from '../assets/types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SmallNavBar: React.FC = () => {
  const [slelectedLink, setSelectedLink] = React.useState<string>(pages[0].id);
  const { isDark } = useGlobalContext();
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="m-1">
        <img src={isDark ? darkSrc : lightSrc} alt="click" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[85vw] p-2 shadow"
      >
        {pages.map((page: page) => {
          return (
            <motion.li
              key={page.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLink(page.id)}
              className={`flex justify-center items-start ${
                page.id === slelectedLink ? 'underline decoration-black' : ''
              }`}
            >
              <Link
                to={page.to}
                className="flex justify-center items-center gap-x-1"
              >
                <h1 className="capitalize">{page.title}</h1>
                <img src={page.img} alt="arrow" className=" bg-black" />
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default SmallNavBar;
