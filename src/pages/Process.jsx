import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Reveal from '../components/common/Reveal';

const STEP_STYLES = ['bg-lemon -rotate-2', 'bg-lilac rotate-1', 'bg-mint -rotate-1'];

function Process() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();
  const steps = t('process_steps');

  return (
    <section id="process" className="px-3 sm:px-6">
      <div className="max-w-6xl mx-auto bg-ink text-paper rounded-[2.5rem] px-5 sm:px-10 py-20 md:py-24">
        <Reveal className="text-center mb-14">
          <p className="eyebrow text-lemon">{t('process_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('process_title')}</h2>
        </Reveal>

        <ol className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={i} delay={i * 120} className="relative">
              <div className={`card text-ink p-7 h-full ${STEP_STYLES[i]}`}>
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-full bg-white border-[2.5px] border-ink flex items-center justify-center font-display font-extrabold text-2xl">
                    {i + 1}
                  </span>
                  <span className="text-6xl" aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className="mt-6 text-2xl leading-tight">{step.title}</h3>
                <span className="sticker bg-white mt-5 text-xs">{step.tag}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-6 z-10 text-4xl text-lemon" aria-hidden="true">→</span>
              )}
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <button onClick={() => scrollTo('contact')} className="btn-primary text-lg !border-paper !shadow-[4px_4px_0_0_#FFF7EC]">
            🎁 {t('process_cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Process;
