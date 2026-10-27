// Splits text into letters that lift in a wave when the word is hovered.
// Letters are grouped per word so a line can only ever break between words.
const HoverLetters = ({ text, className = '' }: { text: string; className?: string }) => {
  let index = 0;
  return (
    <span className={`group/letters inline-block ${className}`} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
          {Array.from(word).map((ch) => {
            const i = index++;
            return (
              <span
                key={i}
                className="inline-block transition-transform duration-300 ease-out group-hover/letters:-translate-y-[0.12em] motion-reduce:transition-none"
                style={{ transitionDelay: `${i * 22}ms` }}
              >
                {ch}
              </span>
            );
          })}
          {w < text.split(' ').length - 1 && ' '}
        </span>
      ))}
    </span>
  );
};

export default HoverLetters;
