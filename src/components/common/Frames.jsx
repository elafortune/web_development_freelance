// Cadres visuels : navigateur, téléphone, polaroid

export function BrowserFrame({ src, alt, url, className = '' }) {
  return (
    <div className={`card overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-3 py-2 border-b-[2.5px] border-ink bg-paper">
        <span className="w-3 h-3 rounded-full bg-tomato border-2 border-ink" />
        <span className="w-3 h-3 rounded-full bg-lemon border-2 border-ink" />
        <span className="w-3 h-3 rounded-full bg-mint border-2 border-ink" />
        {url && (
          <span className="ml-2 flex-1 truncate text-xs font-semibold text-ink-muted bg-white border-2 border-ink rounded-full px-3 py-0.5">
            {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        )}
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top bg-paper-dark" />
    </div>
  );
}

export function PhoneFrame({ src, alt, objectPosition = 'object-top', className = '' }) {
  return (
    <div className={`bg-ink p-1.5 rounded-[2rem] border-[2.5px] border-ink shadow-brutal ${className}`}>
      <div className="relative rounded-[1.6rem] overflow-hidden bg-paper-dark">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-ink rounded-full z-10" />
        <img src={src} alt={alt} loading="lazy" className={`w-full aspect-[9/19] object-cover ${objectPosition}`} />
      </div>
    </div>
  );
}

export function Polaroid({ src, alt, caption, className = '' }) {
  return (
    <figure className={`bg-white p-3 pb-2 border-[2.5px] border-ink shadow-brutal-lg rounded-md ${className}`}>
      <img src={src} alt={alt} className="w-full aspect-[4/5] object-cover object-top rounded-sm" />
      {caption && <figcaption className="font-hand text-3xl text-center pt-1 leading-tight">{caption}</figcaption>}
    </figure>
  );
}
