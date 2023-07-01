import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';

export default function Home() {
  return (
    <main className='pc:flex'>
      <Nav />

      <div className='pc:h-screen'>
        <Header
          style={
            'w-full pc:h-1/6 text-center items-center grid pc:text-5xl text-3xl mb-10 pc:mb-0 drop-shadow-lg'
          }
          title={'Welcom to Chinami PortfolioSite'}
        />
        <Slide />
      </div>
    </main>
  );
}
