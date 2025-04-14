import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_tcd3jxv';
      const templateId = 'template_khrl1zf';
      const userId = 'O4V-2HPp83eYOkp-d';

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
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block glow-text">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.contactInfo')}</h3>
              <p className="text-gray-300 mb-8">{t('contact.freelance')}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <Mail className="text-neon-purple" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t('navbar.email')}</h4>
                  <a
                    href="mailto:jamilshoujah.dev@gmail.com"
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                  >
                    jamilshoujah.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                  <Phone className="text-neon-blue" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t('contact.phone')}</h4>
                  <a
                    href="tel:+96170565932"
                    className="text-gray-400 hover:text-neon-blue transition-colors ltr"
                    dir="ltr"
                  >
                    +961 70 565 932
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-4">
                  <MapPin className="text-neon-pink" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t('contact.location')}</h4>
                  <p className="text-gray-300">
                    {i18n.language === 'ar'
                      ? 'بيروت، لبنان'
                      : i18n.language === 'fr'
                      ? 'Beyrouth, Liban'
                      : 'Beirut, Lebanon'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-white font-medium mb-4">{t('contact.social')}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a
                  href="https://github.com/jamilshoujah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/jamilshoujah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/jamilshoujah_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-pink transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://x.com/jamilshoujah_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="contact-form"
            className="bg-black/40 border border-gray-800 rounded-lg p-8 glassmorphism"
          >
            <h3 className="text-xl font-bold text-white mb-6">{t('contact.form.title')}</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Label htmlFor="name" className="block text-gray-400 mb-2">
                  {t('contact.name')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                  placeholder={t('contact.name')}
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="email" className="block text-gray-400 mb-2">
                  {t('contact.email')}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                  placeholder={t('contact.email')}
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="block text-gray-400 mb-2">
                  {t('contact.message')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 resize-none"
                  placeholder={t('contact.message')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-6 rounded-lg flex items-center justify-center
                  ${
                    isSubmitting
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-neon-purple to-neon-pink hover:shadow-lg hover:shadow-neon-purple/20'
                  }
                  text-white font-medium transition-all duration-300
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t('contact.sending')}
                  </span>
                ) : (
                  <span className="flex items-center">
                    {t('contact.send')}
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
