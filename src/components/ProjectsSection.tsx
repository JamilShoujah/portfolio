import React, { useState } from 'react';
import { ExternalLink, Github, Server, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  gradientFrom: string;
  gradientTo: string;
  type: 'mobile' | 'web';
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'web'>('all');
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sweep',
      description:
        'A services app connecting users with local experts in pest control, cleaning, and similar services, promoting employment of local labor forces.',
      techStack: ['Kotlin', 'Jetpack Compose', 'Flask', 'AWS Lambda', 'S3'],
      achievements: [
        'Delivered a fully functional app with smooth backend integration',
        'Optimized AWS services for cost-efficiency and performance',
      ],
      gradientFrom: 'neon-purple',
      gradientTo: 'neon-blue',
      type: 'mobile',
    },
    {
      id: 2,
      title: 'Student Hub',
      description:
        'A full-stack academic platform providing students with tools to chat, share exams, and review courses.',
      techStack: ['React.js', 'ASP.NET', 'MySQL', 'MVC'],
      achievements: [
        'Provided students with a platform to chat, share exams, and review courses',
        'Improved database efficiency with optimized queries',
      ],
      gradientFrom: 'neon-blue',
      gradientTo: 'neon-cyan',
      type: 'web',
    },
    {
      id: 3,
      title: 'Robin Hood',
      description:
        'A platform helping students review courses, evaluate instructors, and access past exams with secure authentication.',
      techStack: ['React.js', 'ASP.NET'],
      achievements: [
        'Helps students review courses, evaluate instructors, and access past exams',
        'Secure authentication and data storage',
      ],
      gradientFrom: 'neon-pink',
      gradientTo: 'neon-orange',
      type: 'web',
    },
    {
      id: 4,
      title: 'Pro-Academix',
      description:
        'A tutoring center webpage building a structured platform for tutors, students, and courses.',
      techStack: ['Next.js', 'React'],
      achievements: [
        'Building a structured platform for tutors, students, and courses',
        'Implementing dark mode & multilingual support with custom theme and language wrappers',
      ],
      gradientFrom: 'neon-orange',
      gradientTo: 'neon-purple',
      type: 'web',
    },
    {
      id: 5,
      title: 'Developer Portfolio',
      description:
        'A modern, responsive portfolio website showcasing my skills, experience, and projects with a sleek neon-themed design.',
      techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'EmailJS'],
      achievements: [
        'Created a fully responsive design with smooth animations and interactions',
        'Implemented a functional contact form with EmailJS integration',
      ],
      gradientFrom: 'neon-cyan',
      gradientTo: 'neon-pink',
      type: 'web',
    },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.type === activeFilter);

  // Helper function to safely get gradient class
  const getGradientClass = (from: string, to: string) => {
    return `bg-gradient-to-r from-${from} to-${to}`;
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">
            {t('projects.title')}
          </h2>
          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"></div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-black/50 border border-gray-800 rounded-lg glassmorphism">
            <button
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              {t('projects.filters.all')}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                activeFilter === 'web'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('web')}
            >
              {t('projects.filters.web')}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                activeFilter === 'mobile'
                  ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('mobile')}
            >
              {t('projects.filters.mobile')}
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden glassmorphism animated-card group"
              >
                {/* Project header with gradient */}
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

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {t(`projects.items.${project.id}.title`, project.title)}
                    </h3>
                    <div>
                      {project.type === 'mobile' ? (
                        <div className="flex items-center bg-black/70 px-3 py-1 rounded-full text-xs">
                          <Smartphone size={12} className="mr-1" />
                          <span>{t('projects.types.mobile')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center bg-black/70 px-3 py-1 rounded-full text-xs">
                          <Server size={12} className="mr-1" />
                          <span>{t('projects.types.web')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {t(`projects.items.${project.id}.description`, project.description)}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-500 mb-2">
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

                  {/* Key achievements */}
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 mb-2">
                      {t('projects.achievements')}
                    </h4>
                    <ul className="text-sm text-gray-300">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start mb-1">
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
