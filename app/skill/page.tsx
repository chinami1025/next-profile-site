import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Image from 'next/image';
import HTML from '../Images/icon/HTML.png';
import CSS from '../Images/icon/CSS.png';
import Sass from '../Images/icon/Sass.png';
import Bootstrap from '../Images/icon/Bootstrap.png';
import Tailwind from '../Images/icon/TailwindCSS.png';
import JS from '../Images/icon/JS.png';
import jQuery from '../Images/icon/jQuery.png';
import TS from '../Images/icon/TS.png';
import react from '../Images/icon/React.png';
import next from '../Images/icon/NEXT.png';
import Firebase from '../Images/icon/Firebase.png';
import Java from '../Images/icon/Java.png';
import GitHub from '../Images/icon/GitHub.png';

const page = () => {
  const imageDate = [
    { src: HTML, alt: 'HTML' },
    { src: CSS, alt: 'CSS' },
    { src: Sass, alt: 'Sass' },
    { src: Bootstrap, alt: 'Bootstrap' },
    { src: Tailwind, alt: 'TailwindCSS' },
    { src: JS, alt: 'JS' },
    { src: jQuery, alt: 'jQuery' },
    { src: TS, alt: 'TS' },
    { src: react, alt: 'React' },
    { src: next, alt: 'NEXT.JS' },
    { src: Firebase, alt: 'Firebase' },
    { src: Java, alt: 'Java' },
    { src: GitHub, alt: 'GitHub' },
  ];

  return (
    <div className='flex'>
      <Nav />
      <div>
        <Header title={'SKILL'} />
        <div className='w-full flex flex-wrap px-10 justify-around'>
          {imageDate.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src}
                alt={`${item.alt}の画像`}
                className='w-48 h-auto py-10 object-cover'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
