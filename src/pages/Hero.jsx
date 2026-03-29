import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { WHATSAPP_NUMBER } from '../data/constants';

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function Hero() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour Emerick, je vous contacte depuis votre portfolio. Je souhaite discuter de mon projet.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden animate-hero-bg"
      style={{
        background: 'linear-gradient(-45deg, #020617, #0f172a, #1a0533, #0f172a, #020617)',
        backgroundSize: '400% 400%',
      }}
    >
      {/* Aurora blob 1 — indigo top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none animate-aurora-1"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #6366f1 0%, #8b5cf6 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Aurora blob 2 — violet bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none animate-aurora-2"
        style={{
          background: 'radial-gradient(circle at 60% 60%, #a855f7 0%, #7c3aed 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Aurora blob 3 — blue center subtle */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none animate-aurora-3"
        style={{
          background: 'radial-gradient(ellipse at center, #4f46e5 0%, #6d28d9 30%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />
      {/* Aurora blob 4 — pink accent top-right */}
      <div
        className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, #c026d3 0%, #7c3aed 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.12,
          animationDelay: '7s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 py-20 w-full">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-10 animate-fadeIn">
          <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-semibold tracking-wide">{t('hero_intro')}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full px-5 py-2.5">
            <span className="text-indigo-300 text-sm font-semibold tracking-wide">✦ 100% sur mesure</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-7 animate-fadeIn delay-100">
          <h1 className="font-display font-bold leading-none tracking-tight">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2">
              {t('hero_headline_1') || 'Je crée des sites'}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {t('hero_headline_2') || 'qui vous rendent visibles.'}
            </span>
          </h1>
        </div>

        {/* Sub */}
        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 animate-fadeIn delay-200">
          {t('hero_sub')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeIn delay-300">
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary text-base px-8 py-4"
          >
            {t('hero_cta_primary')} ↓
          </button>
          <button
            onClick={handleWhatsApp}
            className="btn-whatsapp text-base px-8 py-4 flex items-center gap-2"
          >
            {WHATSAPP_SVG}
            {t('hero_cta_whatsapp')}
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10 animate-fadeIn delay-400">
          {[
            { value: t('stat_sites'), label: t('stat_sites_label') },
            { value: t('stat_clients'), label: t('stat_clients_label') },
            { value: t('stat_response'), label: t('stat_response_label') },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollTo('marquee-section')}
          className="text-slate-600 hover:text-slate-400 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;
