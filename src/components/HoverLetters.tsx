// Splits text into letters that lift in a wave when the word is hovered.
const HoverLetters = ({ text, className = '' }: { text: string; className?: string }) => (
  <span className={`group/letters inline-block ${className}`} aria-label={text}>
    {Array.from(text).map((ch, i) => (
      <span
        key={i}
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover/letters:-translate-y-[0.12em] motion-reduce:transition-none"
        style={{ transitionDelay: `${i * 22}ms` }}
      >
        {ch === ' ' ? ' ' : ch}
      </span>
    ))}
  </span>
);

export default HoverLetters;
