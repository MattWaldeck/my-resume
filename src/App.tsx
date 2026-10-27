import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Brands from './components/Brands';
import OpenToWork from './components/OpenToWork';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Approach from './components/Approach';
import CtaBand from './components/CtaBand';
import Stack from './components/Stack';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Toaster from './components/Toaster';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <OpenToWork />
        <Brands />
        <Projects />
        <Experience />
        <Approach />
        <CtaBand />
        <Stack />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
      <Toaster />
    </>
  );
}

export default App;
