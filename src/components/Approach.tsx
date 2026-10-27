import { principles, services } from '../data';

const Approach = () => {
  return (
    <section className="bg-paper-2 py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="h-section">The parts of a store customers never see.</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            The product page is the easy bit. The work is in the stock sync from the ERP, the pricing rules for each B2B
            account, and the checkout that stays fast on a phone in a taxi queue.
          </p>
        </div>

        <div>
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group grid gap-2 border-b border-ink/10 py-6 first:pt-0 sm:grid-cols-[1fr_1fr] sm:gap-8"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                {s.title}
              </h3>
              <p className="leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap mt-20 grid gap-10 md:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="reveal relative pt-5">
            <span className="rule-grow absolute inset-x-0 top-0 h-[2px] bg-ink" />
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
