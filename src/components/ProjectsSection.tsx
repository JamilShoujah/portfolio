import { useState } from 'react';
import { Server, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '@/constants/Projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'web'>('all');
  const { t } = useTranslation();

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.type === activeFilter);

  const getGradientClass = (from: string, to: string) => {
    return `bg-gradient-to-r from-${from} to-${to}`;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 inline-block glow-text">
            {t('projects.title')}
          </h2>
          <div className="w-20 sm:w-28 h-1 mx-auto bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex overflow-x-auto p-1 bg-black/50 border border-gray-800 rounded-lg glassmorphism space-x-2 sm:space-x-0">
            {(['all', 'web', 'mobile'] as const).map((type) => (
              <button
                key={type}
                className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm whitespace-nowrap transition-all ${
                  activeFilter === type
                    ? type === 'all'
                      ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white'
                      : type === 'web'
                      ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                      : 'bg-gradient-to-r from-neon-blue to-neon-pink text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveFilter(type)}
              >
                {t(`projects.filters.${type}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden glassmorphism animated-card group"
              >
                {/* Gradient Header */}
                <div
                  className={`h-2 ${
                    project.title === 'Pro-Academix'
                      ? 'bg-gradient-to-r from-neon-orange to-neon-purple'
                      : project.title === 'Developer Portfolio'
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-pink'
                      : getGradientClass(
                          `neon-${project.gradientFrom.split('-')[1]}`,
                          `neon-${project.gradientTo.split('-')[1]}`,
                        )
                  }`}
                ></div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-0">
                      {t(`projects.items.${project.id}.title`, project.title)}
                    </h3>
                    <div className="flex items-center bg-black/70 px-3 py-1 rounded-full text-xs w-fit">
                      {project.type === 'mobile' ? (
                        <>
                          <Smartphone size={12} className="mr-1" />
                          <span>{t('projects.types.mobile')}</span>
                        </>
                      ) : (
                        <>
                          <Server size={12} className="mr-1" />
                          <span>{t('projects.types.web')}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                    {t(`projects.items.${project.id}.description`, project.description)}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm uppercase text-gray-500 mb-2">
                      {t('projects.techStack')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 border border-white/10 px-2 py-1 rounded-md text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase text-gray-500 mb-2">
                      {t('projects.achievements')}
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-neon-purple mr-2">•</span>
                          <span>
                            {t(`projects.items.${project.id}.achievements.${index}`, achievement)}
                          </span>
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

export default ProjectsSection;
