/* eslint-disable react-refresh/only-export-components -- standalone page, not hot-reloaded site code */
// Social graphics for the LinkedIn launch post. Not part of the site build.
// Open /my-resume/marketing/linkedin/card.html?v=portrait (1080×1350) or ?v=landscape (1200×627).
import ReactDOM from 'react-dom/client';
import '../../src/index.css';
import PotholeDemo from '../../src/components/PotholeDemo';

const variant = new URLSearchParams(location.search).get('v') === 'landscape' ? 'landscape' : 'portrait';
const url = 'mattwaldeck.github.io/my-resume';
const roles = ['Remote', 'Hybrid', 'Permanent', 'Part-time', 'Contract'];
const heroShot = new URL('./raw/hero-dark.png', import.meta.url).href;

const Browser = ({ className = '' }: { className?: string }) => (
  <div
    className={`overflow-hidden rounded-2xl border border-white/10 bg-[#1b1c19] shadow-[0_40px_90px_-30px_rgb(0_0_0/0.8)] ${className}`}
  >
    <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
      <span className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </span>
      <span className="mx-auto flex items-center gap-2 rounded-md bg-white/5 px-4 py-1 font-mono text-[12px] text-white/60">
        <span className="text-[#7cc474]">●</span> {url}
      </span>
      <span className="w-[52px]" />
    </div>
    <img src={heroShot} alt="" className="block w-full" />
  </div>
);

const OpenTag = () => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#7cc474]/15 px-4 py-2 text-[17px] font-semibold text-[#7cc474]">
    <span className="h-2.5 w-2.5 rounded-full bg-[#7cc474] shadow-[0_0_0_5px_rgb(124_196_116/0.2)]" />
    Open to new roles
  </span>
);

const Roles = ({ size = 'lg' }: { size?: 'lg' | 'md' | 'sm' }) => (
  <div className="flex flex-wrap gap-2.5">
    {roles.map((r) => (
      <span
        key={r}
        className={`rounded-full border border-white/15 bg-white/5 font-semibold text-night-fg ${
          size === 'lg' ? 'px-5 py-2.5 text-[19px]' : size === 'md' ? 'px-4 py-2 text-[17px]' : 'px-3.5 py-1.5 text-[14px]'
        }`}
      >
        {r}
      </span>
    ))}
  </div>
);

const Glow = () => (
  <>
    <div className="grid-bg-night pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
    <div className="pointer-events-none absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-accent/20 blur-[140px]" />
  </>
);

const Portrait = () => (
  <div className="relative h-[1350px] w-[1080px] overflow-hidden bg-night font-sans text-night-fg">
    <Glow />
    <div className="relative px-[72px] pt-[72px]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[26px] font-bold tracking-tight">Matthew Waldeck</span>
        <OpenTag />
      </div>
      <h1 className="mt-14 font-display text-[104px] font-bold leading-[0.95] tracking-[-0.04em]">
        My new portfolio
        <br />
        is <span className="text-accent">live.</span>
      </h1>
      <p className="mt-7 max-w-[760px] text-[26px] leading-snug text-night-fg/65">
        Full-stack developer in Cape Town. Shopify Hydrogen, B2B commerce and React, for Under Armour, Vans, Crocs,
        Birkenstock and Jonsson Workwear.
      </p>
    </div>

    <Browser className="absolute left-[72px] top-[600px] w-[780px]" />
    <div className="absolute right-[56px] top-[530px] w-[300px] origin-top-right scale-[1.12]">
      <PotholeDemo controls={false} still={6} />
    </div>

    <div className="absolute inset-x-[72px] bottom-[60px]">
      <Roles size="md" />
      <p className="mt-5 font-mono text-[20px] text-accent">{url} →</p>
    </div>
  </div>
);

const Landscape = () => (
  <div className="relative h-[627px] w-[1200px] overflow-hidden bg-night font-sans text-night-fg">
    <Glow />
    <div className="relative flex h-full flex-col justify-between py-[52px] pl-[60px]">
      <div>
        <OpenTag />
        <h1 className="mt-7 font-display text-[58px] font-bold leading-[0.98] tracking-[-0.035em]">
          My new portfolio
          <br />
          is <span className="text-accent">live.</span>
        </h1>
        <p className="mt-5 max-w-[420px] text-[19px] leading-snug text-night-fg/65">
          Full-stack developer in Cape Town building Shopify Hydrogen and B2B commerce.
        </p>
      </div>
      <div className="max-w-[470px]">
        <Roles size="sm" />
        <p className="mt-5 font-mono text-[15px] text-accent">{url}</p>
      </div>
    </div>

    <Browser className="absolute left-[600px] top-[70px] w-[720px]" />
    <div className="absolute right-[40px] top-[150px] w-[300px] origin-top-right scale-[0.78]">
      <PotholeDemo controls={false} still={6} />
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(variant === 'landscape' ? <Landscape /> : <Portrait />);
