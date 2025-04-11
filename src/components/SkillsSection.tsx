
import React, { useEffect } from 'react';
import { Monitor, Server, Database, Code, Layers, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setActiveCategory, setCategories, SkillCategory } from '@/store/skillsSlice';

const SkillsSection = () => {
  const dispatch = useAppDispatch();
  const { activeCategory, categories } = useAppSelector((state) => state.skills);
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize categories from the translation data
    const initialCategories: SkillCategory[] = [
      {
        id: "frontend",
        title: t('skills.categories.frontend'),
        icon: <Monitor size={24} />,
        skills: ["React.js", "React Native", "Next.js", "Jetpack Compose (Kotlin)", "HTML/CSS", "Responsive Design", "Figma", "UI/UX Design"],
        color: "neon-purple"
      },
      {
        id: "backend",
        title: t('skills.categories.backend'),
        icon: <Server size={24} />,
        skills: ["Node.js", "ASP.NET", "Flask", "API Development", "RESTful APIs", "Authentication", "Authorization"],
        color: "neon-blue"
      },
      {
        id: "database",
        title: t('skills.categories.database'),
        icon: <Database size={24} />,
        skills: ["MySQL", "SQL Query Optimization", "Database Design", "Data Modeling", "MongoDB", "Firebase"],
        color: "neon-cyan"
      },
      {
        id: "languages",
        title: t('skills.categories.languages'),
        icon: <Code size={24} />,
        skills: ["JavaScript/TypeScript", "C#", "Python", "Kotlin", "SQL", "Java", "C++"],
        color: "neon-pink"
      },
      {
        id: "state",
        title: t('skills.categories.state'),
        icon: <Layers size={24} />,
        skills: ["MobX", "Redux", "Context API", "State Machines"],
        color: "neon-orange"
      },
      {
        id: "cloud",
        title: t('skills.categories.cloud'),
        icon: <Cloud size={24} />,
        skills: ["AWS (Lambda, S3)", "Serverless Architecture", "CI/CD", "Version Control (Git)"],
        color: "neon-purple"
      }
    ];
    
    dispatch(setCategories(initialCategories));
  }, [dispatch, t]);

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setActiveCategory(categoryId));
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  return (
    <section id="skills" className="py-20 bg-black/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl opacity-40 mix-blend-screen parallax" data-depth="2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl opacity-30 mix-blend-screen parallax" data-depth="3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">{t('skills.title')}</h2>
          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Skills categories navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  flex items-center px-4 py-3 rounded-lg transition-all duration-300
                  ${activeCategory === category.id 
                    ? `bg-gradient-to-r from-${category.color} to-${category.color}/70 text-white shadow-md` 
                    : 'bg-black/50 border border-gray-800 text-gray-400 hover:text-white glassmorphism'}
                `}
              >
                <span className={`mr-2 ${activeCategory === category.id ? 'text-white' : `text-${category.color}`}`}>
                  {category.icon}
                </span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills display */}
          {currentCategory && (
            <div className={`
              p-8 rounded-xl border transition-all duration-500
              bg-black/20 glassmorphism animate-fade-in
              border-${currentCategory.color}/50
            `}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-${currentCategory.color}/20 flex items-center justify-center mr-4`}>
                  <span className={`text-${currentCategory.color}`}>{currentCategory.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{currentCategory.title} {t('skills.skillsLabel')}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentCategory.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-3 rounded-lg border border-gray-800 bg-black/50
                      hover:border-${currentCategory.color}/50 hover:shadow-md
                      hover:shadow-${currentCategory.color}/10 transition-all duration-300
                    `}
                  >
                    <div className="text-center">
                      <p className="text-gray-200">{skill}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional text */}
          <div className="mt-12 text-center text-gray-400">
            <p className="mb-4">{t('skills.subtitle')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
