import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Gradient line at top */}
      <div className="h-0.5 w-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"></div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold glow-text">
                {i18n.language === 'ar' ? 'جميل شجاع' : 'Jamil Shoujah'}
              </span>
            </div>
            <p className="text-gray-400 mt-2">{t('hero.role')}</p>
          </div>

          <div className="flex space-x-6 rtl:space-x-reverse">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/jamilshoujah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-purple transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com/in/jamilshoujah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.instagram.com/jamilshoujah_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://x.com/jamilshoujah_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:jamilshoujah.dev@gmail.com"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p> */}

          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
