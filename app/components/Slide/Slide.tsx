'use client';
import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
import kobe from '../../Images/Slideshow/BEKOBE.jpg';
import ikarimark from '../../Images/Slideshow/ikarimark.jpg';
import ocean from '../../Images/Slideshow/ocean.jpg';
import matomae from '../../Images/Slideshow/matomae.jpg';
import himejijo from '../../Images/Slideshow/himejijo.jpg';
import mozaiku from '../../Images/Slideshow/mozaiku.jpg';
import ruminarie from '../../Images/Slideshow/ruminarie_1.jpg';
import OsakaBanpaku_1 from '../../Images/Slideshow/bannpaku.jpg';

const Slide = () => {
  const options = {
    type: 'loop',
    autoplay: true, // 自動再生を有効
    pauseOnHover: false,
    resetProgress: false,
    height: '100%',
    interval: 3000, // 自動再生の間隔を3秒に設定
    arrow: false,
    pagination: false,
  };

  const SLIDE_IMG = [
    {
      src: kobe,
      alt: 'BEKOBE',
    },
    {
      src: ikarimark,
      alt: '神戸のポートタワー',
    },
    {
      src: ocean,
      alt: '海',
    },
    {
      src: matomae,
      alt: '的前',
    },
    {
      src: himejijo,
      alt: '姫路城',
    },
    {
      src: mozaiku,
      alt: '神戸モザイク',
    },
    {
      src: ruminarie,
      alt: 'ルミナリエ',
    },
    {
      src: OsakaBanpaku_1,
      alt: '大阪万博公園の太陽の塔2019',
    },
  ];

  return (
    <div className='w-full h-5/6'>
      <Splide
        hasTrack={false}
        aria-label='ホーム写真'
        options={options}
        className='h-full'
      >
        <SplideTrack className='h-full w-full'>
          {SLIDE_IMG.map((item, index) => {
            return (
              <SplideSlide key={index} className='h-full w-full'>
                <Image
                  src={item.src}
                  alt={`${item.alt}の画像`}
                  className='h-full w-full object-cover'
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div className='splide__arrows hidden'>
          <button className='splide__arrow splide__arrow--prev'></button>
          <button className='splide__arrow splide__arrow--next'></button>
        </div>
      </Splide>
    </div>
  );
};

export default Slide;
