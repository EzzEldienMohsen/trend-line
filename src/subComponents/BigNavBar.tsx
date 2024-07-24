import React from 'react';
import { pages } from '../assets';
import { page } from '../assets/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BigNavBar: React.FC = () => {
  const [slelectedLink, setSelectedLink] = React.useState<string>(pages[0].id);
  return (
    <ul className="hidden lg:flex justify-between items-center gap-x-4 list-none ">
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
  );
};

export default BigNavBar;
