import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="align-element py10">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
