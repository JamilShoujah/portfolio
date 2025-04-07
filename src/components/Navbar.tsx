
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <TooltipProvider>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
          isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="w-full max-w-6xl flex justify-between items-center">
            {/* Logo - Always on the left */}
            <Link to="/" className="text-white text-xl font-semibold flex items-center">
              <span className="glow-text text-2xl">JS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className={cn("flex", isRTL ? "space-x-reverse space-x-8" : "space-x-8")}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-neon-purple after:to-neon-pink after:transition-all after:duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons - Desktop */}
            <div className={cn("hidden md:flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://github.com/jamilshoujah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{t('navbar.github')}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://linkedin.com/in/jamilshoujah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{t('navbar.linkedin')}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="mailto:jamilshoujah.dev@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors p-2"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{t('navbar.email')}</p>
                </TooltipContent>
              </Tooltip>
              
              {/* Language Switcher - Always last in the list */}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {/* Language Switcher for Mobile */}
              <LanguageSwitcher />
              
              <button 
                className="text-white ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
              aria-label={t('navbar.closeMenu')}
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-white text-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-6 mt-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://github.com/jamilshoujah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2"
                  >
                    <Github size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('navbar.github')}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://linkedin.com/in/jamilshoujah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors p-2"
                  >
                    <Linkedin size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('navbar.linkedin')}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="mailto:jamilshoujah.dev@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors p-2"
                  >
                    <Mail size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('navbar.email')}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        )}
      </header>
    </TooltipProvider>
  );
};

export default Navbar;
