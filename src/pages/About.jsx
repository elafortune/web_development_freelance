import { useLanguage } from '../context/LanguageContext';
import { aboutInfo } from '../data/about';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function About() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">À propos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('about_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('about_sub')}</p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start transition-all duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left: bio (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-3xl font-display font-bold text-white shadow-lg shadow-primary-500/30 flex-shrink-0">
                E
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">Emerick Lafortune</h3>
                <p className="text-primary-600 font-semibold text-sm">Développeur web freelance</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-slate-400">{t('about_location')}</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">{t('about_bio')}</p>

            <div className="inline-flex items-center gap-2.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-5 py-2.5 text-sm font-semibold">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t('about_availability')}
            </div>
          </div>

          {/* Right: skills (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-bold text-slate-700 mb-5 uppercase tracking-wide">{t('about_skills_title')}</h4>
            <div className="flex flex-wrap gap-2">
              {aboutInfo.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm font-medium bg-surface-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-2 hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
