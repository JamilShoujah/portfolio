import { getExperienceData } from '@/constants/Experience';
import { CalendarDays, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-black/80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">
            {t('experience.title')}
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-0 md:pl-10">
            {/* timeline section */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue"></div>

            {getExperienceData(t)
              .slice()
              .reverse()
              .map((exp, index) => (
                <div key={exp.id} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row">
                    {/* dots on timeline */}
                    <div className="hidden md:block absolute left-[1px] transform -translate-x-1/2 box-border w-5 h-5 rounded-full bg-black border-2 border-neon-purple" />

                    <div className="w-full bg-black/40 border border-gray-800 rounded-lg p-6 md:p-8 glassmorphism hover:border-neon-purple/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.role}
                            <span className="ml-2 bg-gradient-to-r from-neon-purple to-neon-pink text-transparent bg-clip-text">
                              @ {exp.company}
                            </span>
                          </h3>

                          {/* stacked location & period on all screens */}
                          <div className="flex flex-col text-gray-400 text-sm space-y-1 mb-4">
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarDays size={16} className="mr-1" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-neon-purple flex-shrink-0 text-xl">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
