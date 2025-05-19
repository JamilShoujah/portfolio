import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;

      const elements = heroRef.current.querySelectorAll('.parallax') as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        const depth = parseFloat(element.getAttribute('data-depth') || '0');
        const translateX = moveX * depth;
        const translateY = moveY * depth;

        element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-gradient h-screen snap-start relative flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl opacity-40 mix-blend-screen parallax"
          data-depth="2"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl opacity-30 mix-blend-screen parallax"
          data-depth="3"
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-40 mix-blend-screen parallax"
          data-depth="1.5"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 parallax" data-depth="0.3">
            <span className="glow-text">
              {i18n.language === 'ar' ? 'جميل شجاع' : 'Jamil Shoujah'}
            </span>
          </h1>

          <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl text-gray-300 animate-slide-up">{t('hero.role')}</p>
          </div>

          <div className="mt-8 mb-8 animate-fade-in">
            <div className="inline-block p-px bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue rounded-lg">
              <a
                href="/resume.pdf"
                download="JamilShoujah_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-black/80 transition-colors"
              >
                <Download size={18} className="text-neon-pink" />
                <span className="text-white font-medium">{t('hero.downloadResume')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="scroll-indicator">
          <span className="scroll-dot"></span>
        </div>
        <span className="mt-2 text-gray-400 text-sm">{t('hero.scrollDown')}</span>
      </div>
    </section>
  );
};

export default HeroSection;
