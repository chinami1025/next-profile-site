import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';

const page = () => {
  return (
    <div className='flex'>
      <Nav />
      <Header title={'PROFILE'} />
    </div>
  );
};

export default page;
