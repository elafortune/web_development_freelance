import { useState, useEffect } from 'react';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../../data/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useLanguage } from '../../context/LanguageContext';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  const sectionIds = NAV_LINKS.map(link => link.id);
  const activeSectionId = useScrollSpy(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Bonjour Emerick, je vous contacte depuis votre portfolio.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const dark = !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`text-2xl font-display font-bold transition-colors tracking-tight ${dark ? 'text-white hover:text-indigo-300' : 'text-primary-600 hover:text-primary-700'}`}
          >
            EL<span className={dark ? 'text-indigo-400' : 'text-primary-300'}>.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSectionId === link.id
                    ? dark ? 'text-indigo-300' : 'text-primary-600'
                    : dark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`text-xs font-bold rounded-lg px-3 py-1.5 transition-all ${
                dark
                  ? 'border border-white/20 text-slate-400 hover:border-white/40 hover:text-white'
                  : 'border border-slate-200 text-slate-600 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {lang === 'FR' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              {WA_ICON}
              WhatsApp
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`text-xs font-bold rounded-lg px-2 py-1 transition-all ${
                dark ? 'border border-white/20 text-slate-300' : 'border border-slate-200 text-slate-600'
              }`}
            >
              {lang === 'FR' ? 'EN' : 'FR'}
            </button>
            <button
              className={`focus:outline-none p-1 transition-colors ${dark ? 'text-white' : 'text-slate-700'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-1 bg-slate-950/95 backdrop-blur-sm rounded-xl px-3 -mx-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeSectionId === link.id
                    ? 'bg-primary-600/20 text-indigo-300'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}
            <div className="pt-3 px-1">
              <button
                onClick={handleWhatsApp}
                className="w-full btn-whatsapp flex items-center justify-center gap-2 py-3"
              >
                {WA_ICON}
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
