import { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="font-sans text-custom-base-text">
      <Header />
      <Hero />
      <main className="lg:ml-[100px]">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
