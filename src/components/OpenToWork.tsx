import { FiArrowRight, FiBriefcase, FiGlobe } from 'react-icons/fi';
import { availability, profile } from '../data';
import Magnetic from './Magnetic';

const OpenToWork = () => {
  const chips = [
    ...availability.modes.map((m) => ({ label: m, icon: FiGlobe })),
    ...availability.types.map((t) => ({ label: t, icon: FiBriefcase })),
  ];

  return (
    <section aria-labelledby="open-to-work" className="border-b border-line py-16 sm:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal">
          <p className="flex items-center gap-2 text-sm font-semibold text-ok">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-ok/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-ok" />
            </span>
            Looking for my next role
          </p>
          <h2 id="open-to-work" className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Open to remote and hybrid work.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Permanent, part-time or contract, from Cape Town or anywhere remote. Freelance projects welcome too.
          </p>
        </div>

        <div>
          <ul className="flex flex-wrap gap-3">
            {chips.map(({ label, icon: Icon }, i) => (
              <li
                key={label}
                className="chip-pop group flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-3 text-base font-semibold text-ink shadow-[0_6px_18px_-12px_rgb(0_0_0/0.4)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent"
                style={{ animationRange: `entry ${i * 6}% entry ${50 + i * 6}%` }}
              >
                <Icon className="text-rust transition-transform duration-300 ease-out group-hover:rotate-12" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Magnetic>
              <a href={`mailto:${profile.email}?subject=Role%20for%20Matthew`} className="btn-dark group">
                Talk to me about a role
                <FiArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenToWork;
