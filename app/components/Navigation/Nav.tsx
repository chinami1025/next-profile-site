'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import classes from './nav.module.css';
import Image from 'next/image';
import Twitter from '../../Images/icon/Twitter.png';
import Instagram from '../../Images/icon/Instagram.png';
import GitHub from '../../Images/icon/GitHub.png';

const Nav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const NAV_ITEMS = [
    { href: '/', label: 'HOME', marginTop: 'mt-4' },
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
      <nav
        className={
          isOpen
            ? 'z-40 bg-blue-200 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col'
            : 'fixed right-[-100%] lg:border-r lg:border-solid lg:border-current lg:py-24 lg:sticky lg:top-0 lg:w-64 lg:h-screen'
        }
      >
        <ul
          className={
            isOpen
              ? 'flex h-screen justify-center items-center flex-col gap-10 text-4xl'
              : `block ${classes.btn} list-none lg:text-5xl items-center lg:bg-purple-150  lg:bg-opacity-25 lg:h-5/6 lg:grid lg:gap-9`
          }
        >
          {NAV_ITEMS.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`${classes.neon} cursor-pointer ${item.marginTop} ${item.fontSize}`}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='flex lg:gap-7 lg:mt-20 gap-10 mb-20 lg:mb-0 justify-center'>
          {NAV_SNS.map((item, index) => {
            return (
              <Link key={index} href={item.href} target='_blank'>
                <Image
                  src={item.src}
                  alt={`${item.alt}の画像`}
                  className='w-12 h-auto'
                  onClick={handleMenuClose}
                />
              </Link>
            );
          })}
        </div>
      </nav>
      {/* ハンバーガーメニュー */}
      <div className='grid justify-end'>
        <button
          className='z-50 space-y-2 lg:hidden mt-5 mr-3 mb-3 block'
          onClick={isOpen ? handleMenuClose : handleMenuOpen}
        >
          <span
            className={
              isOpen
                ? 'block w-8 h-0.5 bg-white translate-y-2.5 rotate-45 duration-300'
                : 'block w-8 h-0.5 bg-white duration-300'
            }
          />
          <span
            className={
              isOpen
                ? 'block opacity-0 duration-300'
                : 'block w-8 h-0.5 bg-white duration-300'
            }
          />
          <span
            className={
              isOpen
                ? 'block w-8 h-0.5 bg-white -rotate-45 duration-300'
                : 'block w-8 h-0.5 bg-white duration-300'
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
