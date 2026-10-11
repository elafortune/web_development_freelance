import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EMAIL, whatsappUrl } from '../data/constants';
import Reveal from '../components/common/Reveal';
import { HandArrow, WhatsAppIcon } from '../components/common/Doodles';

const FIELDS = [
  { name: 'business', label: 'contact_business', ph: 'contact_business_ph', required: true },
  { name: 'trade', label: 'contact_trade', ph: 'contact_trade_ph', required: true },
  { name: 'name', label: 'contact_name', ph: 'contact_name_ph', required: true },
  { name: 'link', label: 'contact_link', ph: 'contact_link_ph', required: false },
];

function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ business: '', trade: '', name: '', link: '' });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const message = () => {
    const base = t('contact_message', form);
    return form.link ? `${base}\n${form.link}` : base;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappUrl(message()), '_blank', 'noopener');
  };

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(t('contact_subject', form))}&body=${encodeURIComponent(message())}`;

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6">
      <Reveal className="max-w-5xl mx-auto card bg-lemon !shadow-brutal-lg rounded-[2.5rem] p-6 sm:p-10 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="relative">
          <p className="eyebrow">{t('contact_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('contact_title')}</h2>
          <p className="mt-5 text-xl font-semibold">{t('contact_sub')}</p>

          <div className="mt-8 flex items-center gap-3">
            <img src="/images/emerick.webp" alt="" className="w-14 h-14 rounded-full object-cover object-top border-[2.5px] border-ink" />
            <p className="font-hand text-3xl">{t('contact_me')}</p>
          </div>

          <HandArrow className="hidden lg:block absolute bottom-0 right-0 w-28 text-ink -rotate-12" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white border-[2.5px] border-ink rounded-3xl p-6 space-y-4">
          {FIELDS.map((f) => (
            <label key={f.name} className="block">
              <span className="block text-sm font-bold mb-1.5">
                {t(f.label)}
                {f.required && <span className="text-tomato"> *</span>}
              </span>
              <input
                type="text"
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                required={f.required}
                placeholder={t(f.ph)}
                className="w-full border-2 border-ink rounded-xl px-4 py-3 bg-paper placeholder-ink-muted/70 focus:outline-none focus:ring-4 focus:ring-lilac transition"
              />
            </label>
          ))}

          <button type="submit" className="btn-whatsapp w-full text-base sm:text-lg !mt-6">
            <WhatsAppIcon /> {t('contact_submit')}
          </button>
          <a href={mailto} className="block text-center text-sm font-bold underline decoration-2 underline-offset-4 hover:text-tomato">
            {t('contact_email')}
          </a>
        </form>
      </Reveal>
    </section>
  );
}

export default Contact;
