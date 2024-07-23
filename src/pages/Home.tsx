import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Home : React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center" dir="rtl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home