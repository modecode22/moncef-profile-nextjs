import { Inter } from 'next/font/google'
import Hero from '@/components/Hero';
import Expr from '@/components/Expr';
import InterestedIn from '@/components/InterestedIn';
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>   
  <Header />
    <main className="w-full p-10 flex flex-col justify-center items-center px-10  lg:px-40 gap-20">
      <Hero />
      <Expr />
      <InterestedIn />
      <Projects />
    </main>
  <Footer />
    </>
  );
}
