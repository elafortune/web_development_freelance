import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useLanguage } from '../../context/LanguageContext';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const activeSectionId = useScrollSpy(SECTION_IDS);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (e, sectionId) => {
    e.preventDefault();
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const langButton = (
    <button
      onClick={toggleLang}
      className="sticker bg-white text-xs hover:bg-lilac-light transition-colors"
      aria-label={lang === 'FR' ? 'Switch to English' : 'Passer en français'}
    >
      {lang === 'FR' ? 'EN' : 'FR'}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-paper/95 backdrop-blur-sm border-b-[2.5px] border-ink' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" onClick={(e) => go(e, 'home')} className="font-display font-extrabold text-2xl tracking-tight">
            lafortconseil<span className="text-tomato">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l.id !== 'home').map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => go(e, link.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                  activeSectionId === link.id ? 'bg-ink text-paper' : 'hover:bg-white'
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {langButton}
            <button onClick={() => scrollTo('contact')} className="btn-primary !py-2 !px-4 !text-sm">
              🎁 {t('nav_cta')}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {langButton}
            <button
              className="w-10 h-10 flex items-center justify-center bg-white border-2 border-ink rounded-xl shadow-brutal-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" viewBox="0 0 24 24">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => go(e, link.id)}
                className="block py-2.5 px-4 rounded-xl font-display font-bold text-lg hover:bg-white"
              >
                {t(link.labelKey)}
              </a>
            ))}
            <button onClick={(e) => go(e, 'contact')} className="btn-primary w-full mt-2">
              🎁 {t('nav_cta')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
