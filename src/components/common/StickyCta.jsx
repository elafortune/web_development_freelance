import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

// Bouton fixe en bas d'écran sur mobile, masqué en haut de page et quand le formulaire est visible
function StickyCta() {
  const { t } = useLanguage();
  const scrollTo = useSmoothScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById('contact');
      const contactVisible = contact && contact.getBoundingClientRect().top < window.innerHeight;
      setVisible(window.scrollY > 600 && !contactVisible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <button onClick={() => scrollTo('contact')} className="btn-primary w-full text-lg">
        {t('sticky_cta')}
      </button>
    </div>
  );
}

export default StickyCta;
