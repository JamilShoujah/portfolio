
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { SplashScreenProps } from '@/models/interfaces';


const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    // Start fade out when progress reaches 100%
    const finishTimeout = setTimeout(() => {
      if (progress === 100) {
        setFadeOut(true);
        setTimeout(onFinished, 1000); // Call onFinished after fade out animation
        clearInterval(interval);
      }
    }, 250);
    
    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, [progress, onFinished]);
  
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] transition-opacity duration-1000",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue opacity-20 animate-pulse blur-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold glow-text">JS</span>
        </div>
      </div>
      
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-gray-400 text-sm">
        {progress < 100 ? t('splash.loading') : t('splash.welcome')}
      </p>
    </div>
  );
};

export default SplashScreen;
