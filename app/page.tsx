import Image from 'next/image';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import kobe from './Images/BEKOBE.jpg';

export default function Home() {
  return (
    <main className='flex'>
      <Nav />

      <div className='h-screen'>
        <Header
          style={
            'w-full h-1/6 text-center items-center grid text-5xl drop-shadow-lg'
          }
          title={'Welcom to Chinami PortfolioSite'}
        />
        <Image src={kobe} alt='BEKOBEの画像' className='h-5/6 object-cover' />
      </div>
    </main>
  );
}
