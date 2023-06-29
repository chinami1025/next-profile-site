import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Timeline from '../components/Timeline/Timeline';

const page = () => {
  return (
    <div className='flex'>
      <Nav />

      <div className='w-full h-full '>
        <Header title={'CAREER'} />
        <Timeline />
      </div>
    </div>
  );
};

export default page;
