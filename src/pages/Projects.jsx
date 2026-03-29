import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function BrowserMockup({ project, large = false }) {
  const gradient = `linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[1]} 35%, ${project.palette[2]} 70%, ${project.palette[3]} 100%)`;
  const isDark = project.palette[2].startsWith('#1') || project.palette[2].startsWith('#0') || project.palette[2] === '#44403c';
  const titleColor = isDark ? '#f1f5f9' : '#0f172a';
  const urlBarBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)';
  const dotColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)';

  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl ${large ? 'w-full' : 'w-full max-w-md'}`}>
      {/* Browser chrome */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)' }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dotColor }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dotColor }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dotColor }} />
        </div>
        <div
          className="flex-1 rounded-md text-xs px-3 py-1 mx-2 truncate flex items-center gap-1"
          style={{ background: urlBarBg, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}
        >
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {project.url.replace('https://', '')}
        </div>
      </div>
      {/* Preview */}
      <div
        className={`${large ? 'h-64 md:h-80' : 'h-52'} flex items-center justify-center relative`}
        style={{ background: gradient }}
      >
        <div className="text-center px-8">
          <div className="text-6xl mb-4 animate-float">{project.sectorIcon}</div>
          <p className="font-display font-bold text-xl" style={{ color: titleColor, textShadow: isDark ? '0 2px 8px rgba(0,0,0,0.5)' : '0 2px 8px rgba(255,255,255,0.5)' }}>
            {project.title}
          </p>
          <p className="text-sm mt-1 opacity-70" style={{ color: titleColor }}>
            {project.type}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { t, lang } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  const isReversed = index % 2 === 1;
  const before = lang === 'EN' ? project.beforeEN : project.before;
  const after = lang === 'EN' ? project.afterEN : project.after;
  const sector = lang === 'EN' ? project.sectorEN : project.sector;

  return (
    <div
      ref={ref}
      className={`rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, background: `linear-gradient(135deg, ${project.palette[0]}20 0%, white 40%)` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Mockup column */}
        <div
          className={`p-8 flex items-center justify-center min-h-[320px] ${isReversed ? 'lg:order-last' : ''}`}
          style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]} 40%, ${project.palette[2]})` }}
        >
          <BrowserMockup project={project} />
        </div>

        {/* Info column */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          {/* Sector */}
          <div className="flex items-center gap-2 mb-5">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: `${project.palette[2]}20`,
                color: project.palette[2],
                border: `1px solid ${project.palette[2]}40`
              }}
            >
              {project.sectorIcon} {sector}
            </span>
            <span className="text-xs text-slate-400 font-medium">{project.type}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{project.title}</h3>

          {/* Color palette */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-slate-400 font-medium">Palette</span>
            <div className="flex gap-1.5">
              {project.palette.map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Before / After */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <span className="inline-flex text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg">
                  {t('projects_before')}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{before}</p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <span className="inline-flex text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                  {t('projects_after')}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{after}</p>
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: `${project.palette[2]}15`, color: project.palette[2] }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {project.visitCount} {t('projects_visit')}
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group"
            >
              {t('projects_cta')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('projects_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('projects_sub')}</p>
        </div>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
