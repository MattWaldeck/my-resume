import { profile, stack } from '../data';

const Stack = () => {
  return (
    <section id="stack" className="scroll-mt-16 py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h-section">What I work in</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            Day to day it's TypeScript and React on the front, Shopify or Magento underneath, and Node or Spring Boot
            services tying it to everything else.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u mt-6 inline-block text-sm"
          >
            GitHub · {profile.githubHandle}
          </a>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {stack.map((group) => (
            <div key={group.title} className="reveal">
              <h3 className="relative pb-3 font-display text-lg font-bold">
                {group.title}
                <span className="rule-grow absolute inset-x-0 bottom-0 h-[2px] bg-ink" />
              </h3>
              <p className="meta mt-3">{group.text}</p>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between border-b border-line py-2.5 text-[15px] text-ink-2"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 scale-0 rounded-full bg-accent transition-transform duration-200 ease-out group-hover:scale-100" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
