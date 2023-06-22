import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Image from 'next/image';
import profile from '../Images/profile.png';

const page = () => {
  return (
    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Header title={'PROFILE'} />
        <div className='px-48 flex justify-around'>
          <Image src={profile} alt='の画像' className='w-64 h-64 ' />
          <div className='text-center py-14'>
            <h2 className='text-5xl'>Chinami Toda</h2>
            <h3 className='text-3xl'>1996/10/25</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
