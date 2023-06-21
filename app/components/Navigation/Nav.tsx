import Link from 'next/link';
import React from 'react';
import classes from './nav.module.css';

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
      </nav>
    </div>
  );
};

export default Nav;
