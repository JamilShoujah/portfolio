
import React from 'react';
import { Brain, Rocket, Code, Gamepad } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">{t('about.title')}</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.paragraph2')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-neon-purple/50 transition-all duration-300 glassmorphism">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <Code className="text-neon-purple" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{t('about.devJourney.title')}</h3>
              </div>
              <p className="text-gray-300">
                {t('about.devJourney.description')}
              </p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-neon-pink/50 transition-all duration-300 glassmorphism">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-4">
                  <Gamepad className="text-neon-pink" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{t('about.esports.title')}</h3>
              </div>
              <p className="text-gray-300">
                {t('about.esports.description')}
              </p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-neon-blue/50 transition-all duration-300 glassmorphism">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                  <Brain className="text-neon-blue" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{t('about.learning.title')}</h3>
              </div>
              <p className="text-gray-300">
                {t('about.learning.description')}
              </p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-neon-cyan/50 transition-all duration-300 glassmorphism">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-4">
                  <Rocket className="text-neon-cyan" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{t('about.goals.title')}</h3>
              </div>
              <p className="text-gray-300">
                {t('about.goals.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
