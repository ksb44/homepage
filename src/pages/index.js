import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Client from '@/components/Client';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '../components/Process';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element.offsetTop - 150 <= scrollPosition &&
          element.offsetTop + element.offsetHeight - 150 > scrollPosition
        ) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
     
      <Navbar activeLink={activeLink} />
      <main>
        <div id="home"><MainContent /></div>
        <div id="client"><Client /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="process"><Process /></div>
        <div id="features"><Features /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <a
        href="#top"
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-400 transition duration-300"
        onClick={() => scrollToSection('home')}
      >
        ↑
      </a>
    </>
  );
}
