import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const ButtonsHeader: React.FC = () => {
  const { toggleLang, toggleTheme, isArabic, isDark } = useGlobalContext();
  return (
    <div className="flex justify-between items-center gap-x-3">
      <button type="button" onClick={toggleLang} className="avatar">
        {isArabic ? (
          <h1 className="rounded-full">انجليزي</h1>
        ) : (
          <h1 className="rounded-full">A R</h1>
        )}
      </button>
      <button type="button" onClick={toggleTheme} className="avatar">
        {isDark ? (
          <h1 className="rounded-full">Light</h1>
        ) : (
          <h1 className="rounded-full">Dark</h1>
        )}
      </button>
      <Link
        to="/"
        className="hidden lg:flex btn text-center justify-center items-center px-8  rounded-full"
      >
        sign up
      </Link>
    </div>
  );
};

export default ButtonsHeader;
