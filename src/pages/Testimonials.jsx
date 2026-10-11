import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import Reveal from '../components/common/Reveal';
import { Stars } from '../components/common/Doodles';

// Style "post-it" scotché
const NOTE_STYLES = ['bg-lemon-light -rotate-2', 'bg-lilac-light rotate-2 md:translate-y-6', 'bg-mint-light -rotate-1'];

function Testimonials() {
  const { t, lang } = useLanguage();
  const notes = projects.filter((p) => p.testimonial);

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-6 bg-paper-dark border-y-[2.5px] border-ink">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow">{t('testimonials_eyebrow')}</p>
          <h2 className="section-title mt-1">{t('testimonials_title')}</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {notes.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <figure className={`relative card p-7 pt-9 ${NOTE_STYLES[i % NOTE_STYLES.length]}`}>
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-24 h-7 bg-white/70 border-2 border-ink/20" aria-hidden="true" />
                <Stars />
                <blockquote className="mt-3 font-hand text-3xl leading-snug">
                  “{lang === 'EN' ? p.testimonialEN : p.testimonial}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border-2 border-ink flex items-center justify-center text-xl">
                    {p.sectorIcon}
                  </span>
                  <span>
                    <span className="block font-display font-bold">{p.clientName}</span>
                    <span className="block text-sm text-ink-soft">{p.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
