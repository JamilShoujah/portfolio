import { Calendar, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { getCertificatesData } from '@/constants/Certificates';
import { Badge } from './ui/badge';

const CertificateSection = () => {
  const { t } = useTranslation();

  // Array of neon colors for alternating certificates
  const neonColors = ['purple', 'blue', 'pink', 'cyan', 'orange'];

  return (
    <section id="certificates" className="py-20 bg-black/80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">
            {t('certificates.title', 'Certifications')}
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {getCertificatesData(t).map((cert, index) => {
            const neonColor = neonColors[index % neonColors.length];

            return (
              <div
                key={cert.id}
                className={cn(
                  'bg-black/40 border border-gray-800 rounded-lg p-6 md:p-8 glassmorphism',
                  `hover:border-neon-${neonColor}/30 transition-all duration-500`,
                  'animate-scale-in',
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                        {cert.nameKey}
                      </h3>
                      <p
                        className={`text-lg bg-gradient-to-r from-neon-${neonColor} to-neon-${
                          neonColors[(index + 1) % neonColors.length]
                        } bg-clip-text text-transparent`}
                      >
                        {cert.issuerKey}
                      </p>
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center text-gray-400 whitespace-nowrap">
                      <Calendar size={16} className="mr-1 shrink-0" />
                      <span>{cert.issueDateKey}</span>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="text-gray-400 text-sm">
                      <span className="text-gray-500">{t('certificates.id')}:</span>{' '}
                      {cert.credentialId}
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`ml-3 inline-flex items-center text-neon-${neonColor} hover:underline`}
                        >
                          {t('certificates.verify', 'Verify')}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skillKeys.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={cn(
                          'bg-black/50 border-gray-700',
                          `hover:border-neon-${neonColor}/50 hover:shadow-neon-${neonColor}/10`,
                          'transition-all duration-300 text-gray-300',
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
