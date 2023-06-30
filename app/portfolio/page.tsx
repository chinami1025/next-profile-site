import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Link from 'next/link';
import classes from './portfolio.module.css';
import Image from 'next/image';
import WCBCafe from '../Images/portfolio/WCBCafe.jpg';
import portfolioSite from '../Images/portfolio/portfolioSite.jpg';
import shientethou from '../Images/portfolio/shientethou.jpg';
import ToDo from '../Images/portfolio/ToDo.jpg';

const page = () => {
  const PORTFOLIO_ITEMS = [
    {
      link: 'https://chinami1025.github.io/WCBCafe/',
      src: WCBCafe,
      alt: 'WCBCafe',
      title: 'WCBCafe',
      reason: 'HTML・CSSを学習するために本を参考に作成しました。',
      period: '１ヶ月',
      language: 'HTML・CSS',
    },
    {
      link: 'https://chinami-t-portfolio.com/',
      src: portfolioSite,
      alt: 'portfolioSite',
      title: '旧ポートフォリオサイト',
      reason: '就職活動のために作成しました。',
      period: '１週間',
      language: 'React',
    },
    {
      link: 'https://github.com/chinami1025/SupportHandbook',
      src: shientethou,
      alt: 'shientethou',
      title: '支援手帳',
      reason:
        '難病の息子のために\n母子手帳のようなものが欲しくて作成しました。',
      period: '３ヶ月',
      language: 'Java',
    },
    {
      link: 'https://chinami1025.github.io/react-todo-app/',
      src: ToDo,
      alt: 'ToDo',
      title: 'ToDoリスト',
      reason: 'Reactを学習するために動画を参考に作成しました。',
      period: '１週間',
      language: 'React',
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
              <div
                className={`${classes.neumorphism} w-1/3 m-8 p-8 rounded-2xl`}
                key={index}
              >
                <Link href={item.link} target='_blank'>
                  <Image
                    src={item.src}
                    alt={`${item.alt}の画像`}
                    className='w-full h-full rounded-2xl mb-4 object-cover'
                  />
                </Link>
                <div className='w-full h-1/2'>
                  <p className='text-3xl pb-4'>{item.title}</p>
                  <ul className='text-start text-xl whitespace-pre-wrap leading-loose'>
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
