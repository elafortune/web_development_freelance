import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { featuredProjects } from '../data/projects';
import { Underline, SpinBadge, Stars } from '../components/common/Doodles';
import { BrowserFrame, PhoneFrame, Polaroid } from '../components/common/Frames';

const AVATAR_COLORS = ['bg-tomato', 'bg-sky', 'bg-lemon'];

function Hero() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();
  const [salon, second] = featuredProjects;
  const happyClients = featuredProjects.filter((p) => p.clientName);

  return (
    <section id="home" className="relative pt-28 pb-10 md:pt-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-8 items-center">
        {/* Texte */}
        <div>
          <span className="sticker bg-white text-base animate-pop" style={{ '--r': '-2deg' }}>
            {t('hero_hello')}
          </span>

          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-ink-soft animate-pop delay-100">
            {t('hero_seo')}
          </p>

          <h1 className="mt-3 text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-7xl animate-pop delay-200">
            {t('hero_h1_a')}{' '}
            <span className="relative inline-block">
              {t('hero_h1_highlight')}
              <Underline className="absolute left-0 -bottom-2 w-full h-4 text-tomato" />
            </span>{' '}
            {t('hero_h1_b')}
          </h1>

          <p className="mt-7 text-xl md:text-2xl text-ink-soft max-w-lg animate-pop delay-300">{t('hero_sub')}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-pop delay-400">
            <button onClick={() => scrollTo('contact')} className="btn-primary text-lg">
              🎁 {t('hero_cta')}
            </button>
            <button onClick={() => scrollTo('projects')} className="btn-white text-lg">
              {t('hero_cta_secondary')} ↓
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 animate-pop delay-500">
            <div className="flex -space-x-2">
              {happyClients.map((p, i) => (
                <span
                  key={p.id}
                  className={`w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center font-display font-bold text-sm ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  title={p.clientName}
                >
                  {p.clientName[0]}
                </span>
              ))}
            </div>
            <div>
              <Stars />
              <p className="text-sm font-semibold text-ink-soft">{t('hero_proof', { n: happyClients.length })}</p>
            </div>
          </div>
        </div>

        {/* Collage visuel */}
        <div className="relative h-[480px] sm:h-[560px] max-w-[480px] w-full mx-auto">
          <Polaroid
            src="/images/emerick.webp"
            alt="Emerick Lafortune, développeur web freelance"
            caption={t('hero_me')}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-48 sm:w-60 -rotate-3 z-10"
          />

          <BrowserFrame
            src={second.desktopImage}
            alt={`Site ${second.title}`}
            url={second.url}
            className="absolute left-0 bottom-0 w-56 sm:w-72 -rotate-3 z-20 animate-float"
          />

          <PhoneFrame
            src={salon.mobileImage}
            alt={`Site ${salon.title} sur mobile`}
            className="absolute right-0 bottom-0 w-32 sm:w-40 rotate-6 z-30"
          />

          <span className="sticker bg-sky absolute top-6 right-0 sm:right-4 rotate-6 z-20">{t('hero_sticker_city')}</span>
          <span className="sticker bg-tomato text-white absolute top-1/3 -left-1 sm:left-0 -rotate-6 z-20 animate-wiggle">
            {t('hero_sticker_gift')}
          </span>
          <SpinBadge text={t('hero_badge')} center="✂️" className="hidden sm:block absolute -top-2 left-2 z-0" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
