import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.certificates'), href: '#certificates' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <TooltipProvider>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
          isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent',
        )}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="w-full max-w-6xl flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-white text-xl font-semibold flex items-center">
              <span className="glow-text text-2xl">JS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className={cn('flex', isRTL ? 'space-x-reverse space-x-8' : 'space-x-8')}>
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

            {/* Desktop Language Switcher */}
            <div
              className={cn(
                'hidden md:flex items-center',
                isRTL ? 'space-x-reverse space-x-4' : 'space-x-4',
              )}
            >
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
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
          <div className="md:hidden fixed top-0 left-0 w-full h-screen z-[9999] bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-opacity duration-300">
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
          </div>
        )}
      </header>
    </TooltipProvider>
  );
};

export default Navbar;
