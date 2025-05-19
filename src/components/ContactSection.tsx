import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isArabic = i18n.language === 'ar';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_tcd3jxv';
      const templateId = 'template_khrl1zf';
      const userId = 'O4V-2HPp83eYOkp-d';
      const clientTemplate = 'template_e6dznmr';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        userId,
      );

      await emailjs.send(
        serviceId,
        clientTemplate,
        {
          email: formData.email,
        },
        userId,
      );

      toast({
        title: t('contact.success'),
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.error'),
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-black relative overflow-hidden"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-neon-pink/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`mb-12 sm:mb-16 ${isArabic ? 'text-right' : 'text-center'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 inline-block glow-text">
            {t('contact.title')}
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                {t('contact.contactInfo')}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{t('contact.freelance')}</p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <Mail className="text-neon-purple" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    {t('navbar.email')}
                  </h4>
                  <a
                    href="mailto:jamilshoujah.dev@gmail.com"
                    className="text-gray-400 hover:text-neon-purple transition-colors text-sm sm:text-base"
                  >
                    jamilshoujah.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <Phone className="text-neon-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    {t('contact.phone')}
                  </h4>
                  <a
                    href="tel:+96170565932"
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm sm:text-base"
                  >
                    +961 70 565 932
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                  <MapPin className="text-neon-pink" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    {t('contact.location')}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {isArabic ? 'بيروت، لبنان' : 'Beirut, Lebanon'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="contact-form"
            className="bg-black/40 border border-gray-800 rounded-lg p-6 sm:p-8 glassmorphism"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">
              {t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-6">
                <Label
                  htmlFor="name"
                  className="block text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  {t('contact.name')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 text-sm sm:text-base"
                  placeholder={t('contact.name')}
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <Label
                  htmlFor="email"
                  className="block text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  {t('contact.email')}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 text-sm sm:text-base"
                  placeholder={t('contact.email')}
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <Label
                  htmlFor="message"
                  className="block text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  {t('contact.message')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 resize-none text-sm sm:text-base"
                  placeholder={t('contact.message')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-lg flex items-center justify-center
                  ${
                    isSubmitting
                      ? 'bg-neon-purple/50 cursor-not-allowed'
                      : 'bg-neon-purple hover:bg-neon-purple/80'
                  }
                  text-white font-semibold text-sm sm:text-base transition-colors
                `}
              >
                {t('contact.send')}
                <Send className="ml-2 rtl:mr-2 rtl:ml-0" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
