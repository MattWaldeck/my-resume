import { experience } from '../data';
import SectionHead from './SectionHead';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-line bg-card py-24 sm:py-32">
      <div className="wrap">
        <SectionHead title={<>Where I've been working.</>}>
          Three teams, one thread: commerce and data systems that real businesses depend on every day.
        </SectionHead>

        <ol className="relative mt-14 md:pl-8">
          <span className="absolute bottom-0 left-0 top-0 hidden w-px bg-line md:block" />
          <span className="fill-down absolute bottom-0 left-0 top-0 hidden w-[2px] bg-accent md:block" />
          {experience.map((job) => (
            <li
              key={job.company}
              className="reveal group relative grid gap-4 border-t border-line py-10 md:before:absolute md:before:-left-8 md:before:top-[46px] md:before:h-2.5 md:before:w-2.5 md:before:-translate-x-1/2 md:before:rounded-full md:before:bg-accent md:before:ring-4 md:before:ring-card md:before:transition-transform md:before:duration-300 md:hover:before:scale-150 md:before:content-[''] transition-colors md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div>
                <p className="tnum font-mono text-sm text-ink-2">{job.period}</p>
                {job.current && (
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-ok/15 px-3 py-1 text-xs font-semibold text-ok">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-ok/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-ok" />
                    </span>
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {job.title} <span className="text-muted transition-colors group-hover:text-rust">· {job.company}</span>
                </h3>
                <p className="meta mt-1">{job.place}</p>
                <ul className="mt-5 max-w-2xl space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-[11px] h-1 w-3 shrink-0 bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
