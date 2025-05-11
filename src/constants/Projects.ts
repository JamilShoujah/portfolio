import { Project } from '@/models/interfaces';

export const projects: Project[] = [
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
