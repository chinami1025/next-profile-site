'use client';
import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import kobegakuin from '../../Images/career/kobegakuin.jpg';
import cnc from '../../Images/career/cnc.jpg';
import JavaSchool from '../../Images/career/JavaSchool.jpg';
import autumn from '../../Images/career/autumn.jpg';
import TimelineIcon from './TimelineIcon';

const Timeline = () => {
  const TIMELINE_DATE = [
    {
      date: '2015/4 〜 2019/3',
      icon: 'school',
      title: '神戸学院大学',
      subtitle: '法学部法律学科',
      sentence:
        '佐藤ゼミ：佐藤ゼミ主催の刑法討論会\n弓道部：副女子責任者・会計',
      src: kobegakuin,
      alt: 'kobegakuin',
    },
    {
      date: '2019/7 〜 2021/7',
      icon: 'mobile',
      title: '株式会社コスモネット',
      subtitle: '接客販売',
      sentence:
        '大手通信会社の代理店の携帯ショップにて\n接客業務に従事しておりました。',
      src: cnc,
      alt: 'cnc',
    },
    {
      date: '2022/7 〜 2022/10',
      icon: 'computer',
      title: '職業訓練校',
      subtitle: 'Java',
      sentence:
        '大阪の心斎橋の職業訓練校にて4ヶ月間\nJavaを学習しておりました。',
      src: JavaSchool,
      alt: 'JavaSchool',
    },
    {
      date: '2023/7 〜 現在',
      icon: 'computer',
      title: '株式会社Autumn',
      subtitle: 'フロントエンドエンジニア',
      sentence:
        'フロントのカリキュラムを学習しながら\n簡易案件で働いています。',
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
                className='flex items-center justify-around '
                style={{ backdropFilter: 'blur(200px)' }}
              >
                <div className='w-1/2 h-full'>
                  <h3 className='text-3xl'>{item.title}</h3>
                  <h4 className='text-2xl'>{item.subtitle}</h4>
                  <p className='whitespace-pre-wrap'>{item.sentence}</p>
                </div>
                <div className='w-1/2 h-full '>
                  <Image
                    src={item.src}
                    alt={`${item.alt}の画像`}
                    className='w-2/3 h-full object-cover m-5 '
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
