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
    { href: '/work', label: 'WORK' },
  ];
  return (
    <div>
      <nav className='border-r border-solid border-current py-32'>
        <ul
          className={`${classes.btn} w-64 h-screen list-none text-5xl items-center bg-purple-150  bg-opacity-25 justify-items-center grid`}
        >
          {NAV_ITEMS.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${classes.neon} cursor-pointer`}
              >
                {item.label}
              </Link>
            );
          })}
        </ul>
        <div className='flex justify-around mt-20'>
          <Image src={Twitter} alt='Twitterの画像' className='w-12 h-auto ' />
          <Image
            src={Instagram}
            alt='Instagramの画像'
            className='w-12 h-auto '
          />
          <Image src={GitHub} alt='GitHubの画像' className='w-12 h-auto' />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
