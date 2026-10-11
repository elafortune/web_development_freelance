import { useLanguage } from '../../context/LanguageContext';

function Marquee() {
  const { t } = useLanguage();
  const items = t('marquee');
  // Dupliqué pour une boucle sans couture
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-6 overflow-hidden" aria-label={items.join(', ')}>
      <div className="bg-ink text-paper border-y-[2.5px] border-ink py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap" aria-hidden="true">
          {allItems.map((item, i) => (
            <span key={i} className="inline-flex items-center font-display font-bold text-xl md:text-2xl mx-5">
              {item}
              <span className="text-lemon ml-10">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
