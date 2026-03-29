function Card({ children, className = '', hoverable = false, onClick }) {
  const hoverClasses = hoverable
    ? 'hover:border-primary-400 hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';
  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 shadow-sm ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
