const words = ['Open to remote & hybrid', 'Shopify Hydrogen', 'Permanent · Part-time · Contract', 'Magento', 'Built in Cape Town'];

const Marquee = () => {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {row.map((w, i) => (
              <span key={i} className="flex items-center font-display text-3xl font-bold uppercase text-ink/15 sm:text-5xl">
                <span className="px-6">{w}</span>
                <span className="text-accent">+</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
