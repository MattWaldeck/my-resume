import { FiArrowUpRight } from 'react-icons/fi';
import { brands } from '../data';
import { trackSpot } from '../lib/ui';
import SectionHead from './SectionHead';

const Brands = () => {
  return (
    <section id="work" className="scroll-mt-16 py-24 sm:py-32">
      <div className="wrap">
        <SectionHead title="Brands I've built for">
          Storefronts for global sportswear and footwear brands, and enterprise B2B platforms for South African
          businesses.
        </SectionHead>

        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <article
              key={b.name}
              onMouseMove={trackSpot}
              className="spot reveal group relative flex flex-col border-b border-r border-line bg-card/40 p-7 transition-colors duration-300 hover:bg-card sm:p-9"
            >
              <span className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="meta !text-rust">{b.kind}</span>
                <span className="meta">{b.via}</span>
              </div>
              <h3 className="mt-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">{b.name}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">{b.text}</p>
              <div className="mt-auto pt-8">
                {b.url ? (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                  >
                    Visit store
                    <FiArrowUpRight className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-sm text-muted">Private client work</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
