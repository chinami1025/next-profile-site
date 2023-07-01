import Link from 'next/link';
import React from 'react';
import classes from './nav.module.css';
import Image from 'next/image';
import Twitter from '../../Images/icon/Twitter.png';
import Instagram from '../../Images/icon/Instagram.png';
import GitHub from '../../Images/icon/GitHub.png';

const Nav = () => {
  const NAV_ITEMS = [
    { href: '/', label: 'HOME' },
    { href: '/profile', label: 'PROFILE' },
    { href: '/career', label: 'CAREER' },
    { href: '/skill', label: 'SKILL' },
    { href: '/portfolio', label: 'PORTFOLIO', fontSize: 'text-4xl' },
    // { href: '/work', label: 'WORK' },
  ];

  const NAV_SNS = [
    { href: 'https://twitter.com/', src: Twitter, alt: 'Twitter' },
    { href: 'https://www.instagram.com/', src: Instagram, alt: 'Instagram' },
    { href: 'https://github.com/chinami1025', src: GitHub, alt: 'GitHub' },
  ];

  return (
    <div>
      <nav className='border-r pc:border-solid pc:border-current py-28 pc:sticky pc:top-0 h-screen'>
        <ul
          className={`${classes.btn} pc:w-64 list-none text-5xl items-center bg-purple-150  bg-opacity-25 justify-items-center grid pc:h-5/6`}
        >
          {NAV_ITEMS.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`${classes.neon} cursor-pointer ${item.fontSize}`}
              >
                {item.label}
              </Link>
            );
          })}
        </ul>
        <div className='flex justify-around mt-20'>
          {NAV_SNS.map((item, index) => {
            return (
              <Link key={index} href={item.href} target='_blank'>
                <Image
                  src={item.src}
                  alt={`${item.alt}の画像`}
                  className='w-12 h-auto '
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
