import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/common/Reveal';

function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="eyebrow">{t('faq_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('faq_title')}</h2>
        </Reveal>

        <div className="space-y-4">
          {t('faq_items').map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group card px-6 py-5 open:bg-lemon-light">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-lg md:text-xl [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 w-9 h-9 rounded-full border-2 border-ink bg-white flex items-center justify-center text-2xl leading-none transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-lg text-ink-soft">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
