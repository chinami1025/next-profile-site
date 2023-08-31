import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className='lg:flex'>
      <Nav />

      <div className='lg:h-screen'>
        <Header
          style={
            'w-full lg:h-1/6 text-center items-center grid lg:text-5xl text-3xl mb-10 lg:mb-0 drop-shadow-lg mt-24 lg:mt-0'
          }
          title={'Welcom to Chinami PortfolioSite'}
        />
        <Slide />
        <Footer />
      </div>
    </main>
  );
}
