import React from 'react';
import { GraduationCap, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-neon-purple/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 inline-block glow-text">
            {t('services.title')}
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          <p className="text-gray-400 mt-5 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-3xl sm:max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Tutoring Card */}
            <div className="p-5 sm:p-6 border border-gray-800 rounded-lg bg-black/40 glassmorphism hover:border-neon-purple/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3 sm:mr-4">
                  <GraduationCap className="text-neon-purple" size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {t('services.tutoring.title')}
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {t('services.tutoring.description')}
              </p>
              <a
                href="#contact"
                className="text-neon-purple hover:text-neon-pink text-sm transition-colors"
              >
                {t('services.tutoring.cta')} →
              </a>
            </div>

            {/* Freelance Card */}
            <div className="p-5 sm:p-6 border border-gray-800 rounded-lg bg-black/40 glassmorphism hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3 sm:mr-4">
                  <Server className="text-neon-blue" size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {t('services.freelance.title')}
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {t('services.freelance.description')}
              </p>
              <a
                href="#contact"
                className="text-neon-blue hover:text-neon-pink text-sm transition-colors"
              >
                {t('services.freelance.cta')} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
