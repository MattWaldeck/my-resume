import { useEffect, useRef, useState } from 'react';
import { FiCheck, FiInbox } from 'react-icons/fi';

// A short loop of a review session: pins land on the design one by one, a thread is resolved,
// then the approver signs off the version. Sample design and comments only.
const pins = [
  { x: 42, y: 22, role: 'Reviewer', text: 'Headline feels cramped, more space above?' },
  { x: 71, y: 62, role: 'Reviewer', text: 'Can the shoe sit a little higher?' },
  { x: 30, y: 71, role: 'Approver', text: 'Button copy: “Shop the drop”.' },
];

const steps = [
  { ms: 1100 }, // empty canvas
  { ms: 1300 }, // pin 1
  { ms: 1300 }, // pin 2
  { ms: 1300 }, // pin 3
  { ms: 1200 }, // thread 1 resolved
  { ms: 2200 }, // v3 approved
];

const PAPER = '#f6f3ec';
const INK = '#17171a';
const PIN = '#e2462a';

const ProofmarkDemo = () => {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current) setStep(steps.length - 1);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduce.current) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % steps.length), steps[step].ms);
    return () => clearTimeout(t);
  }, [step, visible]);

  const shown = Math.min(step, 3);
  const resolved = step >= 4;
  const approved = step >= 5;

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[520px]" style={{ color: INK }}>
      <div className="overflow-hidden rounded-xl border border-black/10 shadow-[0_40px_80px_-32px_rgb(0_0_0/0.55)]" style={{ background: PAPER }}>
        {/* Window bar */}
        <div className="flex items-center gap-3 border-b border-black/10 px-3.5 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex items-center gap-1.5 text-[12px] font-semibold">
            <svg width="11" height="14" viewBox="0 0 11 14" aria-hidden="true">
              <path d="M5.5 0a5.5 5.5 0 0 1 5.5 5.5C11 9.6 5.5 14 5.5 14S0 9.6 0 5.5A5.5 5.5 0 0 1 5.5 0Z" fill={PIN} />
              <circle cx="5.5" cy="5.5" r="2" fill={PAPER} />
            </svg>
            Proofmark
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-black/50">
            <FiInbox />
            <span className="tnum">{shown}</span>
          </span>
        </div>

        <div className="grid sm:grid-cols-[1.45fr_1fr]">
          {/* Canvas */}
          <div className="relative border-b border-black/10 p-3 sm:border-b-0 sm:border-r">
            <div className="mb-2 flex items-center gap-1.5 text-[10px]">
              <span className="font-semibold">Spring campaign · Homepage</span>
              <span className="ml-auto flex gap-1">
                {['v1', 'v2', 'v3'].map((v) => (
                  <span
                    key={v}
                    className={`rounded px-1.5 py-0.5 font-mono ${v === 'v3' ? 'bg-black text-white' : 'text-black/40'}`}
                  >
                    {v}
                  </span>
                ))}
              </span>
            </div>

            {/* Sample design */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#1f2a44]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,#f2b84b_0,#e0703a_28%,transparent_55%)] opacity-90" />
              <div className="absolute left-[9%] top-[22%] w-[52%] font-display font-bold uppercase leading-[0.9] tracking-tight text-white">
                <span className="block text-[clamp(14px,3.4vw,26px)]">Run</span>
                <span className="block text-[clamp(14px,3.4vw,26px)]">further.</span>
              </div>
              <div className="absolute left-[9%] top-[52%] h-1.5 w-[34%] rounded-full bg-white/40" />
              <div className="absolute left-[9%] top-[60%] h-1.5 w-[26%] rounded-full bg-white/25" />
              <div className="absolute left-[9%] top-[72%] rounded-full bg-white px-2.5 py-1 text-[9px] font-semibold text-[#1f2a44]">
                Shop now
              </div>
              {/* Stylised shoe */}
              <svg viewBox="0 0 120 60" className="absolute right-[6%] top-[46%] w-[44%] -rotate-6" aria-hidden="true">
                <path d="M6 44c10-2 22-14 30-26 4-6 12-6 15 0 4 8 16 12 30 14 16 2 32 6 33 14 1 6-6 8-14 8H14C6 54 2 46 6 44Z" fill="#f6f3ec" />
                <path d="M6 50h108" stroke="#1f2a44" strokeWidth="3" />
                <path d="M40 22l6 10M48 18l7 11M56 20l6 10" stroke="#e0703a" strokeWidth="3" strokeLinecap="round" />
              </svg>

              {pins.map((p, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full transition-[transform,opacity] duration-300 ease-out"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    opacity: i < shown ? 1 : 0,
                    transform: `translate(-50%, ${i < shown ? '-100%' : '-160%'}) scale(${i < shown ? 1 : 0.6})`,
                  }}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full rounded-bl-none text-[11px] font-bold text-white shadow-[0_6px_14px_-4px_rgb(0_0_0/0.5)] ring-2 ring-white transition-colors duration-300"
                    style={{ background: i === 0 && resolved ? '#2f8a4c' : PIN }}
                  >
                    {i === 0 && resolved ? <FiCheck /> : i + 1}
                  </span>
                </span>
              ))}

              {/* Approval stamp */}
              <span
                className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border-2 border-[#2f8a4c] bg-white/95 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2f8a4c] transition-[transform,opacity] duration-300 ease-out"
                style={{ opacity: approved ? 1 : 0, transform: approved ? 'rotate(-6deg) scale(1)' : 'rotate(-6deg) scale(1.4)' }}
              >
                <FiCheck /> Approved v3
              </span>
            </div>
          </div>

          {/* Pin ledger */}
          <div className="flex flex-col gap-2 p-3 text-[11px]">
            <p className="font-semibold">Feedback</p>
            <ol className="space-y-2">
              {pins.map((p, i) => (
                <li
                  key={i}
                  className="rounded-md border border-black/10 bg-white p-2 transition-[opacity,transform] duration-300 ease-out"
                  style={{ opacity: i < shown ? (i === 0 && resolved ? 0.55 : 1) : 0, transform: i < shown ? 'none' : 'translateY(6px)' }}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                      style={{ background: i === 0 && resolved ? '#2f8a4c' : PIN }}
                    >
                      {i + 1}
                    </span>
                    <span className="rounded bg-black/5 px-1 text-[9px] font-semibold text-black/60">{p.role}</span>
                    {i === 0 && resolved && <span className="ml-auto text-[9px] font-semibold text-[#2f8a4c]">Resolved</span>}
                  </span>
                  <span className={`mt-1 block leading-snug ${i === 0 && resolved ? 'line-through' : ''}`}>{p.text}</span>
                </li>
              ))}
            </ol>
            <div
              className="mt-auto flex items-center justify-center gap-1.5 rounded-md py-2 max-sm:mt-1 font-semibold text-white transition-colors duration-300"
              style={{ background: approved ? '#2f8a4c' : INK }}
            >
              {approved ? <FiCheck /> : null}
              {approved ? 'Approved by approver' : 'Approve v3'}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted">Sample design · how a review plays out in Proofmark</p>
    </div>
  );
};

export default ProofmarkDemo;
