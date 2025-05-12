import { buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { ToasterToast } from './types';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  gradientFrom: string;
  gradientTo: string;
  type: 'mobile' | 'web';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}

export interface SkillsState {
  activeCategory: string;
  categories: SkillCategory[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SplashScreenProps {
  onFinished: () => void;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface State {
  toasts: ToasterToast[];
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
