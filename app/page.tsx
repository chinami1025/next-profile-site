import Image from 'next/image';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import kobe from './Images/BEKOBE_01.jpg';

export default function Home() {
  return (
    <main className='flex'>
      <Nav />

      <div>
        <Header
          style={
            'w-full h-32 text-center items-center grid text-5xl drop-shadow-lg'
          }
          title={'Welcom to Chinami PortfolioSite'}
        />
        <Image src={kobe} alt='BE KOBEの画像' className='h-screen' />
      </div>
    </main>
  );
}
