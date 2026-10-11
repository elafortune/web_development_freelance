import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { offer } from '../data/offer';
import Reveal from '../components/common/Reveal';

function Offer() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();
  const plansText = t('offer_plans');

  return (
    <section id="offer" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="eyebrow">{t('offer_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('offer_title')}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {offer.plans.map((plan, i) => {
            const text = plansText[plan.id];
            const commitment = text.commitment.replace('{n}', plan.commitmentMonths ?? '');
            return (
              <Reveal
                key={plan.id}
                delay={i * 120}
                className={`card relative p-8 flex flex-col ${plan.highlight ? 'bg-lemon md:-rotate-1' : 'bg-white md:rotate-1'}`}
              >
                {plan.highlight && (
                  <span className="sticker bg-tomato text-white absolute -top-4 right-6 rotate-3">{t('offer_recommended')}</span>
                )}
                <p className="font-display font-extrabold text-2xl">
                  {plan.emoji} {text.name}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display font-extrabold text-6xl leading-none">{plan.setupPrice}</span>
                  <span className="font-bold text-ink-soft pb-1">{text.setupLabel}</span>
                </div>
                <p className="mt-2 font-display font-bold text-xl">
                  + {plan.monthlyPrice}
                  <span className="font-sans font-semibold text-base text-ink-soft"> {text.monthlyLabel}</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-muted">{commitment}</p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 content-start">
                  {text.features.map((f) => (
                    <li key={f} className="font-semibold">{f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('contact')}
                  className={`${plan.highlight ? 'btn-tomato' : 'btn-white'} mt-8 w-full`}
                >
                  {t('offer_cta')} →
                </button>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 text-center font-hand text-3xl">{t('offer_note')}</p>
      </div>
    </section>
  );
}

export default Offer;
