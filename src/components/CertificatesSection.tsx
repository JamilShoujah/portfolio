import { Calendar, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { getCertificatesData } from '@/constants/Certificates';
import { Badge } from './ui/badge';

const CertificateSection = () => {
  const { t } = useTranslation();

  const neonColors = ['purple', 'blue', 'pink', 'cyan', 'orange'];

  const neonCardHoverClasses: Record<string, string> = {
    purple: 'hover:border-neon-purple/30',
    blue: 'hover:border-neon-blue/30',
    pink: 'hover:border-neon-pink/30',
    cyan: 'hover:border-neon-cyan/30',
    orange: 'hover:border-neon-orange/30',
  };

  const neonBadgeHoverClasses: Record<string, string> = {
    purple: 'hover:border-neon-purple/50 hover:shadow-neon-purple/10',
    blue: 'hover:border-neon-blue/50 hover:shadow-neon-blue/10',
    pink: 'hover:border-neon-pink/50 hover:shadow-neon-pink/10',
    cyan: 'hover:border-neon-cyan/50 hover:shadow-neon-cyan/10',
    orange: 'hover:border-neon-orange/50 hover:shadow-neon-orange/10',
  };

  return (
    <section id="certificates" className="py-16 sm:py-20 bg-black/80 relative overflow-hidden">
      {/* Background Neon Blur Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-neon-pink/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-52 h-52 sm:w-72 sm:h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 inline-block glow-text">
            {t('navbar.certificates')}
          </h2>
          <div className="w-24 sm:w-32 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </div>

        {/* Certificate Cards */}
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {getCertificatesData(t).map((cert, index) => {
            const neonColor = neonColors[index % neonColors.length];

            return (
              <div
                key={cert.id}
                className={cn(
                  'bg-black/40 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 glassmorphism',
                  neonCardHoverClasses[neonColor],
                  'transition-all duration-500 animate-scale-in',
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 flex items-center">
                        {cert.nameKey}
                      </h3>
                      <p
                        className={`text-base sm:text-lg bg-gradient-to-r from-neon-${neonColor} to-neon-${
                          neonColors[(index + 1) % neonColors.length]
                        } bg-clip-text text-transparent`}
                      >
                        {cert.issuerKey}
                      </p>
                    </div>

                    <div className="flex items-center text-sm sm:text-base text-gray-400 whitespace-nowrap">
                      <Calendar size={14} className="mr-1 shrink-0" />
                      <span>{cert.issueDateKey}</span>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="text-gray-400 text-xs sm:text-sm">
                      <span className="text-gray-500">{t('certificates.id')}:</span>{' '}
                      {cert.credentialId}
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'ml-2 inline-flex items-center hover:underline text-sm sm:text-base',
                            {
                              purple: 'text-neon-purple',
                              blue: 'text-neon-blue',
                              pink: 'text-neon-pink',
                              cyan: 'text-neon-cyan',
                              orange: 'text-neon-orange',
                            }[neonColor],
                          )}
                        >
                          {t('certificates.verify', 'Verify')}
                          <ExternalLink size={13} className="rtl:mr-1 ltr:ml-1" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                    {cert.skillKeys.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={cn(
                          'bg-black/50 border-gray-700 text-gray-300 px-2 py-1 text-xs sm:text-sm',
                          neonBadgeHoverClasses[neonColor],
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
