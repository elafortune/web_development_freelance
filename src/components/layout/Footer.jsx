import { NAV_LINKS, EMAIL, PHONE_DISPLAY, whatsappUrl } from '../../data/constants';
import { aboutInfo } from '../../data/about';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useLanguage } from '../../context/LanguageContext';

function Footer() {
  const scrollTo = useSmoothScroll();
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper pt-16 pb-24 md:pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-hand text-6xl md:text-8xl text-lemon -rotate-2 mb-10">{t('footer_bye')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display font-extrabold text-2xl">
              lafortconseil<span className="text-tomato">.</span>
            </p>
            <p className="text-paper/60 mt-2">{t('footer_tagline')}</p>
          </div>

          <ul className="flex flex-wrap md:flex-col gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  className="font-bold hover:text-lemon transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="block font-bold hover:text-lemon">💬 {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="block font-bold hover:text-lemon break-all">✉️ {EMAIL}</a>
            <a href={aboutInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="block font-bold hover:text-lemon">in LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-paper/20 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-paper/50">
          <p>&copy; {new Date().getFullYear()} {aboutInfo.name}. {t('footer_rights')}</p>
          <p>
            <a href="/mentions-legales.html" className="hover:text-lemon underline underline-offset-4">{t('footer_legal')}</a>
            {' · '}{t('footer_made')} ✌️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
