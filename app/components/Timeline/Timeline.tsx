'use client';
import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaMobile } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import kobe from '../../Images/BEKOBE.jpg';

const Timeline = () => {
  const careerDate = [
    {
      // img: require('../Images/BEKOBE.jpg'),
      img: require('../../Images/BEKOBE.jpg'),
      alt: '神戸学院大学の写真',
      lineDate: '2015/4-2019/3',
      titleDate: '神戸学院大学 法学部 法律学科',
      textData:
        '法学部では学長のゼミに所属し、刑法学を専攻しておりました。少年法や犯罪心理学について興味がありました。部活動では、弓道部に所属し、副女子責任者と会計を担っておりました。',
    },
    {
      img: require('../../Images/profile/fukuoka.jpg'),
      alt: '携帯会社の写真',
      lineDate: '2019/7-2021/12',
      titleDate: '株式会社コスモネット',
      textData:
        ' 携帯会社の代理店に勤め、機種変更や故障・修理など端末に関することから、インターネットのご相談なども受けておりました。また、アプリでわからないことがあるお客様への解決やイベントのお姉さんなど、様々な業務をこなしておりました。',
    },
    {
      img: require('../../Images/profile/sorakin.jpg'),
      alt: 'Javaの職業訓練の写真',
      lineDate: '2022/7-2022/10',
      titleDate: '職業訓練校(Java)',
      textData:
        'Webの基礎から、Javaの学習をしServletとJSPを使ってWebアプリ制作をしました。',
    },
  ];

  return (
    <div className='w-full'>
      {/* <VerticalTimeline animate={true}>
        {careerDate.map((item, key) => {
          return (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              key={key}
              date={item.lineDate}
              dateClassName={'timelineDate'}
              icon={<Image src={item.img} alt={item.alt} />}
            >
              <h3>{item.titleDate}</h3>
              <p>{item.textData}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline> */}
      <VerticalTimeline layout={'1-column'}>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          contentStyle={{
            background: 'rgb(202, 183, 241)',
            color: '#fefffb',
          }}
          contentArrowStyle={{ borderRight: '10px solid  rgb(202, 183, 241)' }}
          iconStyle={{
            background: 'rgb(202, 183, 241)',
            color: '#fefffb',
          }}
          icon={<FaSchool />}
          date='2015/4~2019/3'
        >
          <div
            className='flex items-center justify-around '
            style={{ backdropFilter: 'blur(200px)' }}
          >
            <div className='w-1/2 h-full'>
              <h3 className='text-3xl'>神戸学院大学</h3>
              <h4 className='text-2xl'>法学部法律学科</h4>
              <p>佐藤ゼミ：佐藤ゼミ主催の刑法討論会</p>
              <p>弓道部：副女子責任者・会計</p>
            </div>
            <div className='w-1/2 h-full '>
              <Image
                src={kobe}
                alt='神戸'
                className='w-2/3 h-full object-cover m-5 '
              />
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          contentStyle={{
            background: 'rgb(132, 227, 231)',
            color: '#fefffb',
          }}
          contentArrowStyle={{ borderRight: '10px solid  rgb(132, 227, 231)' }}
          iconStyle={{
            background: 'rgb(132, 227, 231)',
            color: '#fefffb',
          }}
          icon={<FaMobile />}
          date='2019/7~2021/12'
        >
          <div className='flex items-center justify-aroun'>
            <div className='w-1/2 h-full'>
              <h3 className='text-3xl'>Creative Director</h3>
              <h4 className='text-2xl'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </div>
            <div className='w-1/2 h-full '>
              <Image
                src={kobe}
                alt='神戸'
                className='w-2/3 h-full object-cover m-5 '
              />
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          contentStyle={{
            background: 'rgb(202, 183, 241)',
            color: '#fefffb',
          }}
          contentArrowStyle={{ borderRight: '10px solid  rgb(202, 183, 241)' }}
          iconStyle={{
            background: 'rgb(202, 183, 241)',
            color: '#fefffb',
          }}
          icon={<MdComputer />}
          iconClassName=''
          date='2015/4~2019/3'
        >
          <div className='flex items-center justify-aroun'>
            <div className='w-1/2 h-full'>
              <h3 className='text-3xl'>Creative Director</h3>
              <h4 className='text-2xl'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </div>
            <div className='w-1/2 h-full '>
              <Image
                src={kobe}
                alt='神戸'
                className='w-2/3 h-full object-cover m-5 '
              />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          contentStyle={{
            background: 'rgb(132, 227, 231)',
            color: '#fefffb',
          }}
          contentArrowStyle={{ borderRight: '10px solid  rgb(132, 227, 231)' }}
          iconStyle={{
            background: 'rgb(132, 227, 231)',
            color: '#fefffb',
          }}
          icon={<MdComputer />}
          date='2019/7~2021/12'
        >
          <div className='flex items-center justify-aroun'>
            <div className='w-1/2 h-full'>
              <h3 className='text-3xl'>Creative Director</h3>
              <h4 className='text-2xl'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </div>
            <div className='w-1/2 h-full '>
              <Image
                src={kobe}
                alt='神戸'
                className='w-2/3 h-full object-cover m-5 '
              />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
