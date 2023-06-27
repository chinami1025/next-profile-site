import React from 'react';
import Nav from '../components/Navigation/Nav';
import Header from '../components/Header/Header';
import Image from 'next/image';
import kyudo from '../Images/profile/kyudo.jpg';
import mato from '../Images/profile/mato.jpg';
import fukuoka from '../Images/profile/fukuoka.jpg';
import sorakin from '../Images/profile/sorakin.jpg';

const page = () => {
  return (
    <div className='flex'>
      <Nav />
      <div className='w-full h-full'>
        <Header title={'PROFILE'} />
        <div className='px-20 flex justify-around'>
          <div className='flex flex-wrap w-2/3'>
            <Image
              src={kyudo}
              alt='の画像'
              className='m-1.5 w-44 h-44 rounded-tl-full rounded-tr-full rounded-bl-full object-cover'
            />
            <Image
              src={mato}
              alt='の画像'
              className='m-1.5 w-44 h-44 rounded-tl-full rounded-tr-full rounded-br-full object-cover'
            />
            <Image
              src={fukuoka}
              alt='の画像'
              className='m-1.5 w-44 h-44 rounded-tl-full rounded-bl-full rounded-br-full object-cover'
            />
            <Image
              src={sorakin}
              alt='の画像'
              className='m-1.5 w-44 h-44 rounded-tr-full rounded-bl-full rounded-br-full object-cover'
            />
          </div>
          <div className='text-center py-14 mr-40 w-2/3'>
            <p className='text-6xl pb-5'>Chinami Toda</p>
            <p className='text-3xl pb-4'>1996/10/25</p>
            <p className='text-3xl pb-4'>神戸出身</p>
            <p className='text-3xl pb-4'>大阪府豊中市在住</p>
            <p className='text-2xl'>趣味：メイク研究 ・筋トレ・ゲーム</p>
          </div>
        </div>
        <div className='text-center m-20 mr-72'>
          <p className='text-3xl py-16'>活動内容</p>
          <p className='text-2xl'>
            アプリ開発をするためエンジニアに転職しました。
            <br />
            現在はフロントのカリキュラムをこなしながら
            <br />
            簡易案件のお仕事をしています！
          </p>
          <p className='text-3xl py-16'>活動理由</p>
          <p className='text-2xl'>
            息子がウィリアムズ症候群という難病指定されている病気なので
            <br />
            息子のためにエンジニアを目指しました！
          </p>
          <p className='text-3xl py-16'>将来の夢</p>
          <p className='text-2xl'>
            息子のような障害のある人や関わりのある人の
            <br />
            役に立てるようなアプリを開発するのが夢です！
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
