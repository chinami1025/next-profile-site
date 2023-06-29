import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Image from 'next/image';
import kobe from '../Images/BEKOBE.jpg';
import Link from 'next/link';

const page = () => {
  const PORTFOLIO_ITEMS = [
    {
      link: 'https://github.com/chinami1025/SupportHandbook',
      src: kobe,
      alt: 'kobe',
      title: '支援手帳',
      reason: '息子のため',
      period: '2ヶ月',
      language: 'Java',
    },
    {
      link: 'https://github.com/chinami1025/SupportHandbook',
      src: kobe,
      alt: 'kobe',
      title: '支援手帳',
      reason: '息子のため',
      period: '2ヶ月',
      language: 'Java',
    },
    {
      link: 'https://github.com/chinami1025/SupportHandbook',
      src: kobe,
      alt: 'kobe',
      title: '支援手帳',
      reason: '息子のため',
      period: '2ヶ月',
      language: 'Java',
    },
    {
      link: 'https://github.com/chinami1025/SupportHandbook',
      src: kobe,
      alt: 'kobe',
      title: '支援手帳',
      reason: '息子のため',
      period: '2ヶ月',
      language: 'Java',
    },
  ];

  return (
    <div className='flex'>
      <Nav />
      <div className='w-full h-full'>
        <Header title={'PORTFOLIO'} />
        <div className='w-full h-2/3 text-center flex flex-wrap items-center justify-around'>
          {PORTFOLIO_ITEMS.map((item, index) => {
            return (
              <div className='bg-purple-200 w-1/3 m-8 p-3' key={index}>
                <Link href={item.link} target='_blank'>
                  <Image
                    src={kobe}
                    alt={`${item.alt}の画像`}
                    className='w-full h-full rounded-md pb-4 object-cover'
                  />
                </Link>
                <div className='w-full h-1/2'>
                  <p className='text-3xl pb-4'>{item.title}</p>
                  <ul className='text-start text-xl'>
                    <li>作成理由：{item.reason}</li>
                    <li>作成期間：{item.period}</li>
                    <li>使用言語：{item.language}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
