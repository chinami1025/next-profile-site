import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Image from 'next/image';
import kyudo from '../Images/profile/kyudo.jpg';
import mato from '../Images/profile/mato.jpg';
import fukuoka from '../Images/profile/fukuoka.jpg';
import sorakin from '../Images/profile/sorakin.jpg';

const page = () => {
  const PROGILE_IMGS = [
    {
      src: kyudo,
      alt: 'kyudo',
      style:
        'm-1.5 w-44 h-44 rounded-tl-full rounded-tr-full rounded-bl-full object-cover',
    },
    {
      src: mato,
      alt: 'mato',
      style:
        'm-1.5 w-44 h-44 rounded-tl-full rounded-tr-full rounded-br-full object-cover',
    },
    {
      src: fukuoka,
      alt: 'fukuoka',
      style:
        'm-1.5 w-44 h-44 rounded-tl-full rounded-bl-full rounded-br-full object-cover',
    },
    {
      src: sorakin,
      alt: 'sorakin',
      style:
        'm-1.5 w-44 h-44 rounded-tr-full rounded-bl-full rounded-br-full object-cover',
    },
  ];

  const CONTENT = [
    {
      title: '活動内容',
      sentence:
        'アプリ開発をするためエンジニアに転職しました。\n現在はフロントのカリキュラムをこなしながら\n簡易案件のお仕事をしています！',
    },
    {
      title: '活動理由',
      sentence:
        '息子がウィリアムズ症候群という難病指定されている病気なので\n息子のためにエンジニアを目指しました！',
    },
    {
      title: '将来の夢',
      sentence:
        '息子のような障害のある人や関わりのある人の\nお役に立てるようなアプリを開発するのが夢です！',
    },
  ];

  return (
    <div className='flex relative'>
      <Nav />
      <div className='w-full h-full'>
        <Header title={'PROFILE'} />
        <div className='px-20 flex justify-around'>
          <div className='flex flex-wrap w-96'>
            {PROGILE_IMGS.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item.src}
                  alt={`${item.alt}の画像`}
                  className={`${item.style}`}
                />
              );
            })}
          </div>
          <div className='text-center py-14 w-1/2'>
            <p className='text-6xl pb-5'>Chinami Toda</p>
            <p className='text-3xl pb-4'>1996/10/25</p>
            <p className='text-3xl pb-4'>神戸出身</p>
            <p className='text-3xl pb-4'>大阪府豊中市在住</p>
            <p className='text-2xl'>趣味：メイク研究 ・筋トレ・ゲーム</p>
          </div>
        </div>
        <div className='text-center m-20'>
          {CONTENT.map((item, index) => {
            return (
              <div key={index}>
                <p className='text-3xl pt-16 pb-8'>{item.title}</p>
                <p className='text-2xl whitespace-pre-wrap'>{item.sentence}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
