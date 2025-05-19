
import React from 'react';
import { GraduationCap, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">{t('services.title')}</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-800 rounded-lg bg-black/40 glassmorphism hover:border-neon-purple/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <GraduationCap className="text-neon-purple" size={18} />
                </div>
                <h4 className="text-lg font-bold text-white">{t('services.tutoring.title')}</h4>
              </div>
              <p className="text-gray-300 mb-4">
                {t('services.tutoring.description')}
              </p>
              <div className="mt-3">
                <a 
                  href="#contact" 
                  className="text-neon-purple hover:text-neon-pink transition-colors"
                >
                  {t('services.tutoring.cta')} →
                </a>
              </div>
            </div>

            <div className="p-6 border border-gray-800 rounded-lg bg-black/40 glassmorphism hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                  <Server className="text-neon-blue" size={18} />
                </div>
                <h4 className="text-lg font-bold text-white">{t('services.freelance.title')}</h4>
              </div>
              <p className="text-gray-300 mb-4">
                {t('services.freelance.description')}
              </p>
              <div className="mt-3">
                <a 
                  href="#contact" 
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  {t('services.freelance.cta')} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
