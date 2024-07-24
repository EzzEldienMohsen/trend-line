import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
import { useGlobalContext } from '../context/GlobalContext';

const Home: React.FC = () => {
  const { isDark, isArabic } = useGlobalContext();

  return (
    <div
      data-theme={isDark ? 'luxury' : 'winter'}
      className="flex flex-col justify-center items-center relative w-full"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
