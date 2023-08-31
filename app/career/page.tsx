import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Timeline from '../components/Timeline/Timeline';
import Footer from '../components/Footer/Footer';

const page = () => {
  return (
    <div className='lg:flex'>
      <Nav />

      <div className='w-full h-full '>
        <Header title={'CAREER'} />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
};

export default page;
