
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add smooth scrolling behavior
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      
      if (
        target.tagName === 'A' &&
        target.href &&
        target.href.includes('#') &&
        target.pathname === window.location.pathname
      ) {
        const hash = target.href.split('#')[1];
        const element = document.getElementById(hash);
        
        if (element) {
          event.preventDefault();
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  // Handle splash screen completion
  const handleSplashFinished = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <SplashScreen onFinished={handleSplashFinished} />}
      
      <div className={`min-h-screen bg-black text-white ${loading ? 'hidden' : 'block'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
