import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { WHATSAPP_NUMBER, EMAIL } from '../data/constants';

function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour Emerick,\n\nJe suis ${form.name}${form.email ? ` (${form.email})` : ''}.\n\n${form.message}\n\nJ'attends votre réponse. Merci !`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis - ${form.name}`);
    const body = encodeURIComponent(`Bonjour Emerick,\n\nJe suis ${form.name}.\n\n${form.message}\n\nMon email : ${form.email}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_self');
  };

  const contactInfos = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: t('contact_whatsapp_label'),
      value: '+33 6 63 73 26 77',
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact_email_label'),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: 'text-primary-600',
      bg: 'bg-primary-50',
      border: 'border-primary-200',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact_location_label'),
      value: t('contact_location_value'),
      href: null,
      color: 'text-slate-600',
      bg: 'bg-slate-50',
      border: 'border-slate-200',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('contact_title')}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('contact_sub')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-surface-50 border border-slate-200 rounded-2xl p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact_name')}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition"
                  placeholder="Votre prénom et nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact_email')}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact_message')}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white transition resize-none"
                  placeholder={t('contact_placeholder')}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button onClick={handleWhatsApp} className="btn-whatsapp flex-1 flex items-center justify-center gap-2 py-3.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('contact_whatsapp_cta')}
                </button>
                <button onClick={handleEmail} className="btn-secondary flex-1 py-3.5">
                  {t('contact_email_cta')}
                </button>
              </div>
              <p className="text-center text-sm text-slate-400 pt-1">{t('contact_response')}</p>
            </form>
          </div>

          {/* Contact infos */}
          <div className="flex flex-col gap-4 justify-center">
            {contactInfos.map((info, i) => (
              <div
                key={i}
                className={`${info.bg} border ${info.border} rounded-2xl p-5 flex items-center gap-4`}
              >
                <div className={`${info.color} flex-shrink-0`}>{info.icon}</div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className={`font-semibold ${info.color} hover:underline`}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-slate-700">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Devis info */}
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mt-2">
              <h4 className="font-bold text-slate-900 mb-2">Devis gratuit et detaille</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Chaque projet est unique. Je vous propose un devis sur mesure, detaille et transparent, adapte exactement a vos besoins et votre budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
