import { SkillCategory } from '@/models/interfaces';
import { Monitor, Server, Database, Code, Layers, Cloud } from 'lucide-react';

export const getInitialCategories = (t: (key: string) => string): SkillCategory[] => [
  {
    id: 'frontend',
    title: t('skills.categories.frontend'),
    icon: <Monitor size={24} />,
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'Jetpack Compose (Kotlin)',
      'HTML/CSS',
      'Responsive Design',
      'Figma',
      'UI/UX Design',
    ],
    color: 'neon-purple',
  },
  {
    id: 'backend',
    title: t('skills.categories.backend'),
    icon: <Server size={24} />,
    skills: [
      'Node.js',
      'ASP.NET',
      'Flask',
      'API Development',
      'RESTful APIs',
      'Authentication',
      'Authorization',
    ],
    color: 'neon-blue',
  },
  {
    id: 'database',
    title: t('skills.categories.database'),
    icon: <Database size={24} />,
    skills: [
      'MySQL',
      'SQL Query Optimization',
      'Database Design',
      'Data Modeling',
      'MongoDB',
      'Firebase',
    ],
    color: 'neon-cyan',
  },
  {
    id: 'languages',
    title: t('skills.categories.languages'),
    icon: <Code size={24} />,
    skills: ['JavaScript/TypeScript', 'C#', 'Python', 'Kotlin', 'SQL', 'Java', 'C++'],
    color: 'neon-pink',
  },
  {
    id: 'state',
    title: t('skills.categories.state'),
    icon: <Layers size={24} />,
    skills: ['MobX', 'Redux', 'Context API', 'State Machines'],
    color: 'neon-orange',
  },
  {
    id: 'cloud',
    title: t('skills.categories.cloud'),
    icon: <Cloud size={24} />,
    skills: ['AWS (Lambda, S3)', 'Serverless Architecture', 'CI/CD', 'Version Control (Git)'],
    color: 'neon-purple',
  },
];
