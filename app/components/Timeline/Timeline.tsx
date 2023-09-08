'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineIcon from './TimelineIcon';
import Image from 'next/image';
import kobegakuin from '../../Images/career/kobegakuin.jpg';
import cnc from '../../Images/career/cnc.jpg';
import JavaSchool from '../../Images/career/JavaSchool.jpg';
import autumn from '../../Images/career/autumn.jpg';

const Timeline = () => {
  const TIMELINE_DATE = [
    {
      date: '2015/4 〜 2019/3',
      icon: 'school',
      title: '神戸学院大学',
      subtitle: '法学部法律学科',
      sentence:
        '警察官を目指し、刑法を専攻しました。\n佐藤ゼミ：佐藤ゼミ主催の刑法討論会\n刑法討論会2017年 優勝\n\n弓道部：副女子責任者・会計\n弓道 弐段まで取得しました。',
      src: kobegakuin,
      alt: 'kobegakuin',
    },
    {
      date: '2019/07 〜 2021/12',
      icon: 'mobile',
      title: '株式会社コスモネット',
      subtitle: '接客販売',
      sentence:
        '大手通信会社の代理店の携帯ショップにて\n接客業務に従事しておりました。\n\n・契約内容の確認、変更\n・機種のご変更\n・新規契約\n・解約\n・料金支払の受付\n・故障修理の受付\n・イベントの運営\n・商品の販売、管理、発注\n・店内清掃',
      src: cnc,
      alt: 'cnc',
    },
    {
      date: '2022/07 〜 2022/10',
      icon: 'computer',
      title: '職業訓練校',
      subtitle: 'Java',
      sentence:
        '大阪の心斎橋の職業訓練校にて4ヶ月間\nWebの基礎からJavaまでを学習し\nServletとJSPを使用しWebアプリを制作しました。',
      src: JavaSchool,
      alt: 'JavaSchool',
    },
    {
      date: '2023/07 〜 2023/08',
      icon: 'computer',
      title: '株式会社Autumn',
      subtitle: 'フロントエンドエンジニア',
      sentence:
        'フロントエンドのカリキュラムを学習しながら\n簡易案件で働いておりました。\n【カリキュラムの内容】\nHTML\nCSS\nSass\nJavaScript\njQuery\nTypeScript\nTailwindCSS\nReact',
      src: autumn,
      alt: 'autumn',
    },
  ];

  const getBackgroundColor = (index: number) =>
    index % 2 === 0 ? 'rgb(202, 183, 241)' : 'rgb(132, 227, 231)';

  return (
    <div className='w-full'>
      <VerticalTimeline layout={'1-column'}>
        {TIMELINE_DATE.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: getBackgroundColor(index),
                color: '#fefffb',
              }}
              contentArrowStyle={{
                borderRight: `10px solid ${getBackgroundColor(index)}`,
              }}
              iconStyle={{
                background: getBackgroundColor(index),
                color: '#fefffb',
              }}
              icon={<TimelineIcon icon={item.icon} />}
              date={item.date}
            >
              <div
                className='pc:flex items-center justify-around '
                style={{ backdropFilter: 'blur(200px)' }}
              >
                <div className='pc:w-1/2 h-full'>
                  <h3 className='text-3xl pb-2'>{item.title}</h3>
                  <h4 className='text-2xl'>{item.subtitle}</h4>
                  <p className='whitespace-pre-wrap'>{item.sentence}</p>
                </div>
                <div className='w-1/2 h-full '>
                  <Image
                    src={item.src}
                    alt={`${item.alt}の画像`}
                    className='pc:w-2/3 h-full object-cover m-5 '
                  />
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
