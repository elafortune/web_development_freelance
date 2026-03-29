import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function Section({ id, title, subtitle, className = '', children, dark = false }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
