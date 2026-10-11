import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Fait apparaître son contenu quand il entre dans l'écran
function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.12, triggerOnce: true });
  return (
    <Tag
      ref={ref}
      className={`reveal ${isIntersecting ? 'reveal-shown' : 'reveal-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
