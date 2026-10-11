import { useLanguage } from '../context/LanguageContext';
import { whatsappUrl } from '../data/constants';
import Reveal from '../components/common/Reveal';
import { Polaroid } from '../components/common/Frames';
import { WhatsAppIcon } from '../components/common/Doodles';

const FACT_COLORS = ['bg-sky-light', 'bg-lilac-light', 'bg-lemon-light', 'bg-mint-light'];

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
        <Reveal className="mx-auto">
          <Polaroid
            src="/images/emerick-event.webp"
            alt="Emerick Lafortune en pleine discussion sur un salon tech"
            caption={t('about_caption')}
            className="w-60 sm:w-72 rotate-3"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">{t('about_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('about_title')}</h2>
          <p className="mt-5 text-xl text-ink-soft">{t('about_line')}</p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {t('about_facts').map((fact, i) => (
              <li key={fact} className={`sticker !text-base !whitespace-normal ${FACT_COLORS[i % FACT_COLORS.length]}`}>
                {fact}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl("Bonjour Emerick, je viens de votre site !")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            <WhatsAppIcon /> {t('about_cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
