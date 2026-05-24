import React from 'react';
import Hero from '../sections/Hero';
import LogoTicker from '../sections/LogoTicker';
import About from '../sections/About';
import ServicesSection from '../sections/Services';
import CaseStudy from '../sections/CaseStudy';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';
import { useRouter } from '../context/RouterContext';

export default function HomePage() {
  const { navigate } = useRouter();
  return (
    <div className="page-enter">
      <Hero onCTA={() => navigate('contact')} />
      <LogoTicker />
      <About />
      <ServicesSection />
      <CaseStudy />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
