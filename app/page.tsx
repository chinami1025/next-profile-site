import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';

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
        <Slide />
      </div>
    </main>
  );
}
