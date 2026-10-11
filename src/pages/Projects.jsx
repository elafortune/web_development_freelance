import { useLanguage } from '../context/LanguageContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { featuredProjects } from '../data/projects';
import Reveal from '../components/common/Reveal';
import { BrowserFrame, PhoneFrame } from '../components/common/Frames';
import { HandArrow } from '../components/common/Doodles';

// Classes complètes (Tailwind ne détecte pas les noms construits dynamiquement)
const COLOR = {
  tomato: { bg: 'bg-tomato-light', blob: 'bg-tomato' },
  sky: { bg: 'bg-sky-light', blob: 'bg-sky' },
  lemon: { bg: 'bg-lemon-light', blob: 'bg-lemon' },
  lilac: { bg: 'bg-lilac-light', blob: 'bg-lilac' },
};

function ProjectRow({ project, index }) {
  const { t, lang } = useLanguage();
  const reversed = index % 2 === 1;
  const c = COLOR[project.color] ?? COLOR.lilac;
  const en = lang === 'EN';

  return (
    <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Visuel */}
      <div className={`relative px-2 pb-10 sm:pb-6 ${reversed ? 'lg:order-last' : ''}`}>
        <div className={`absolute inset-x-6 inset-y-4 ${c.blob} rounded-[3rem] border-[2.5px] border-ink ${reversed ? 'rotate-2' : '-rotate-2'}`} />
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="relative block group">
          <BrowserFrame
            src={project.desktopImage}
            alt={`Site ${project.title}`}
            url={project.url}
            className={`w-[88%] transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.02] ${reversed ? 'ml-auto' : ''}`}
          />
          <PhoneFrame
            src={project.mobileImage ?? project.desktopImage}
            alt={`Site ${project.title} sur mobile`}
            objectPosition={project.mobileImage ? 'object-top' : 'object-center'}
            className={`absolute -bottom-8 sm:-bottom-4 w-[28%] max-w-[150px] transition-transform duration-300 group-hover:rotate-0 ${
              reversed ? 'left-0 -rotate-6' : 'right-0 rotate-6'
            }`}
          />
        </a>
        {project.visitCount && (
          <span className={`sticker bg-mint absolute -top-3 ${reversed ? 'right-4' : 'left-4'} -rotate-3`}>
            📈 {project.visitCount} {t('projects_visits')}
          </span>
        )}
      </div>

      {/* Infos */}
      <div>
        <span className={`sticker ${c.bg}`}>
          {project.sectorIcon} {en ? project.sectorEN : project.sector}
        </span>
        <h3 className="mt-4 text-4xl md:text-5xl">{project.title}</h3>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-base font-bold">
          {project.before && (
            <>
              <span className="px-3 py-1.5 rounded-xl border-2 border-dashed border-ink-muted text-ink-muted line-through decoration-2">
                😬 {en ? project.beforeEN : project.before}
              </span>
              <span className="text-2xl" aria-hidden="true">→</span>
            </>
          )}
          <span className="px-3 py-1.5 rounded-xl border-2 border-ink bg-mint shadow-brutal-sm">
            🚀 {en ? project.afterEN : project.after}
          </span>
        </div>

        {project.testimonial && (
          <blockquote className="mt-7 font-hand text-3xl leading-snug">
            “{en ? project.testimonialEN : project.testimonial}”
            <footer className="font-sans text-base font-bold text-ink-muted mt-1">— {project.clientName}</footer>
          </blockquote>
        )}

        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-white mt-7">
          {t('projects_cta')} ↗
        </a>
      </div>
    </Reveal>
  );
}

function Projects() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="eyebrow">{t('projects_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('projects_title')}</h2>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-24 relative">
          <div className="card bg-lemon p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="font-display font-extrabold text-3xl md:text-4xl">{t('projects_next')}</p>
            <button onClick={() => scrollTo('contact')} className="btn-tomato text-lg shrink-0">
              {t('projects_next_cta')}
            </button>
          </div>
          <HandArrow className="hidden md:block absolute -top-16 right-40 w-24 text-ink rotate-12" />
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
