import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { availability, heroWords, profile } from '../data';
import { useCapeTownTime } from '../lib/ui';
import Magnetic from './Magnetic';

const leadLines = ['I build storefronts', 'that hold up on'];
const lead = leadLines.join(' ');

const termLines = [
  { text: '$ shopify hydrogen deploy', tone: 'text-white/90' },
  { text: '→ building storefront (vite)', tone: 'text-white/55' },
  { text: '→ checking routes: /products, /cart', tone: 'text-white/55' },
  { text: '✓ live on oxygen · 0 errors', tone: 'text-[#a6d189]' },
];

// Types the terminal one line at a time after the hero has settled.
function useTypedLines(startDelay: number) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(termLines.length);
      return;
    }
    const timers = termLines.map((_, i) => setTimeout(() => setShown(i + 1), startDelay + i * 520));
    return () => timers.forEach(clearTimeout);
  }, [startDelay]);
  return shown;
}

const Hero = () => {
  const [word, setWord] = useState(0);
  const time = useCapeTownTime();
  const typed = useTypedLines(1300);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % heroWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  const wordCount = lead.split(' ').length;

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]" />

      <div className="wrap relative grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-display text-[40px] font-bold leading-[1] tracking-[-0.035em] min-[400px]:text-[46px] sm:text-6xl lg:text-[60px] xl:text-[76px]">
            <span className="sr-only">
              {lead} {heroWords[0]}
            </span>
            <span aria-hidden="true">
              {leadLines.map((line, li) => (
                <span key={line} className="block whitespace-nowrap">
                  {line.split(' ').map((w, wi) => (
                    <span
                      key={wi}
                      className="inline-block animate-rise pr-[0.22em]"
                      style={{ animationDelay: `${(li * 3 + wi) * 70}ms` }}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              ))}
              <span className="block">
                <span
                  key={word}
                  className="inline-block animate-rise text-rust"
                  style={{ animationDelay: word === 0 ? `${wordCount * 70}ms` : '0ms' }}
                >
                  {heroWords[word]}
                </span>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted [animation-delay:600ms]">
            Full-stack developer in Cape Town. Right now: B2B commerce for Jonsson Workwear and DCC at eCommerceAfrica.
            Before that, storefronts for Under Armour, Vans, Crocs and Birkenstock.
          </p>

          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:700ms]">
            <Magnetic>
              <a href="#work" className="btn-accent">
                See what I've built
              </a>
            </Magnetic>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              Email me
            </a>
            <a href={profile.cv} download="CV_Matthew_Waldeck.pdf" className="btn-outline">
              Resume (PDF)
            </a>
          </div>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-x-6 gap-y-3 text-sm [animation-delay:800ms]">
            <span className="flex items-center gap-2 text-ink-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-ok/60" />
                <span className="relative h-2 w-2 rounded-full bg-ok" />
              </span>
              {availability.short} · <span className="tnum">{time}</span> in Cape Town
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaGithub className="text-base" />
              <span className="link-u">GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaLinkedin className="text-base text-[#0a66c2]" />
              <span className="link-u">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="drift relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -bottom-5 -right-5 left-8 top-8 animate-rise bg-paper-2 [animation-delay:300ms]" />
          <img
            src={profile.photo}
            alt="Matthew Waldeck"
            className="relative aspect-[4/5] w-full animate-unveil object-cover object-top [animation-delay:150ms]"
          />

          <div className="absolute -bottom-10 -left-4 w-[88%] max-w-sm animate-rise bg-term p-4 font-mono text-[12px] leading-relaxed shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)] [animation-delay:1100ms] sm:-left-10">
            <div className="mb-3 flex justify-between text-[11px] text-white/40">
              <span>matt@capetown: ~</span>
              <span>storefront</span>
            </div>
            {termLines.map((l, i) => (
              <p key={l.text} className={`${l.tone} transition-opacity duration-200 ${i < typed ? 'opacity-100' : 'opacity-0'}`}>
                {l.text}
                {i === typed - 1 && <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-current align-middle" />}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
