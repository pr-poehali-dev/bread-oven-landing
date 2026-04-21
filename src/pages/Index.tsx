import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Catalog from '@/components/landing/Catalog';
import Advantages from '@/components/landing/Advantages';
import Technologies from '@/components/landing/Technologies';
import Quiz from '@/components/landing/Quiz';
import Warranty from '@/components/landing/Warranty';
import Service from '@/components/landing/Service';
import About from '@/components/landing/About';
import FAQ from '@/components/landing/FAQ';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="bg-coal text-white">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Advantages />
        <Technologies />
        <Quiz />
        <Warranty />
        <Service />
        <About />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
