
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  // Available languages with flags
  const languages = [
    { code: 'en', name: t('language.en'), flag: '🇺🇸' },
    { code: 'ar', name: t('language.ar'), flag: '🇸🇦' },
    { code: 'fr', name: t('language.fr'), flag: '🇫🇷' },
  ];

  // Change the language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Add RTL support for Arabic
    if (lng === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.classList.remove('rtl');
    }
  };

  const currentLang = i18n.language || 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white p-2 flex items-center justify-center min-w-[40px]">
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="sr-only">{t('navbar.language')}</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{t('navbar.language')}</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end" className="min-w-[160px] bg-black/95 backdrop-blur-lg border-gray-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "flex items-center justify-between gap-2 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50",
              currentLang === lang.code && "font-medium bg-gray-800/80 text-white"
            )}
          >
            <span className="flex items-center gap-2">
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
            {currentLang === lang.code && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
