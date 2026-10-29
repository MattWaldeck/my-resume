import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { featuredProjects, profile, projectFilters, projects } from '../data';
import type { ProjectFilter } from '../data';
import { trackSpot } from '../lib/ui';
import PotholeDemo from './PotholeDemo';
import ProofmarkDemo from './ProofmarkDemo';
import SectionHead from './SectionHead';

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const shown = projects.filter((p) => filter === 'All' || p.group === filter);

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead title={<>Things I'm building myself.</>}>
          A civic-tech app headed for government, a feedback tool for design studios, websites I run for small businesses, and products I sell.
        </SectionHead>

        <div className="mt-14 space-y-10">
          {featuredProjects.map((fp, i) => (
          <article
              key={fp.name}
              className={`reveal grid overflow-hidden border border-line bg-card ${i % 2 ? 'lg:grid-cols-[1fr_1.25fr]' : 'lg:grid-cols-[1.25fr_1fr]'}`}
            >
            <div className={`p-7 sm:p-10 ${i % 2 ? 'lg:order-2' : ''}`}>
              <p className="meta">{fp.kind}</p>
              <h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{fp.name}</h3>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/25 px-3 py-1 text-sm font-medium text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rust" /> {fp.pitch}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">{fp.text}</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {fp.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                    <span className="mt-[9px] h-1 w-3 shrink-0 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg bg-paper-2 px-4 py-3 text-sm leading-relaxed text-ink-2">
                <span className="mb-1 block font-semibold text-rust">{fp.status}</span>
                {fp.next}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {fp.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`${fp.name} walkthrough`)}`}
                className="link-u mt-8 inline-flex items-center gap-2"
              >
                <FiMail /> Ask me for a walkthrough
              </a>
            </div>

            <div className="grid-bg relative flex items-center justify-center overflow-hidden bg-paper-2 px-6 py-14">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[90px]" />
              {fp.demo === 'pothole' ? <PotholeDemo /> : <ProofmarkDemo />}
            </div>
          </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-95 ${
                filter === f ? 'border-ink bg-ink text-paper' : 'border-line text-muted hover:border-ink/40 hover:text-ink'
              }`}
            >
              {f}
              <span className="tnum ml-1.5 opacity-60">
                {f === 'All' ? projects.length : projects.filter((p) => p.group === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.name}
              onMouseMove={trackSpot}
              className="spot reveal group flex flex-col border-b border-r border-line bg-card/40 p-7 transition-colors duration-300 hover:bg-card"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="meta">{p.kind}</p>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    p.status.startsWith('Live') ? 'bg-ok/15 text-ok' : 'bg-paper-2 text-muted'
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`${p.name} demo`)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink"
                >
                  <FiLock /> Demo on request
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
