import { useEffect, useRef, useState } from 'react';
import { FiCheck, FiPlus } from 'react-icons/fi';

// Two family phones on the same shopping list: Alice adds milk, it lands on Theo's phone live;
// Theo ticks off bread, and it ticks off on Alice's phone too. Sample family, sample list.
const people = {
  alice: { name: 'Alice', color: '#6c5ce7' },
  theo: { name: 'Theo', color: '#ef8a2a' },
  maya: { name: 'Maya', color: '#e8577a' },
};
type Who = keyof typeof people;

const steps = [
  { id: 'idle', ms: 1200 },
  { id: 'typing', ms: 1100 },
  { id: 'added', ms: 600 }, // on Alice's phone
  { id: 'synced', ms: 1500 }, // arrives on Theo's phone
  { id: 'ticked', ms: 500 }, // Theo ticks bread
  { id: 'tickSynced', ms: 2300 }, // Alice sees it
] as const;
type StepId = (typeof steps)[number]['id'];

const FONT = '"Nunito", "Inter", sans-serif';
const PAPER = '#faf7f2';
const INK = '#22213a';
const BLUE = '#1f4fa3';
const BLUE_SOFT = '#dbe7fb';

interface Item {
  name: string;
  by: Who;
}
const base: Item[] = [
  { name: 'Bread', by: 'maya' },
  { name: 'Eggs', by: 'theo' },
  { name: 'Bananas', by: 'alice' },
  { name: 'Washing powder', by: 'maya' },
];

const Phone = ({ owner, step, typed }: { owner: Who; step: number; typed: string }) => {
  const at = (id: StepId) => step >= steps.findIndex((s) => s.id === id);
  const milkVisible = owner === 'alice' ? at('added') : at('synced');
  const breadDone = owner === 'theo' ? at('ticked') : at('tickSynced');
  const banner =
    owner === 'theo' && steps[step].id === 'synced'
      ? { who: 'alice' as Who, text: 'added Milk' }
      : owner === 'alice' && steps[step].id === 'tickSynced'
        ? { who: 'theo' as Who, text: 'ticked off Bread' }
        : null;
  const p = people[owner];
  const items: Item[] = [{ name: 'Milk', by: 'alice' }, ...base];

  return (
    <div>
      <div className="rounded-[34px] bg-gradient-to-br from-[#5b5b5f] via-[#2a2a2d] to-[#4a4a4e] p-[2px] shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]">
        <div className="rounded-[32px] bg-black p-[6px]">
          <div
            className="relative flex aspect-[9/18.5] flex-col overflow-hidden rounded-[26px]"
            style={{ background: PAPER, color: INK, fontFamily: FONT }}
          >
            {/* Status bar */}
            <div className="relative flex h-7 shrink-0 items-center justify-between px-4 text-[9px] font-bold">
              <span>9:41</span>
              <span className="absolute left-1/2 top-1.5 h-[15px] w-[52px] -translate-x-1/2 rounded-full bg-black" />
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f9a55]" />
                Live
              </span>
            </div>

            {/* Header band */}
            <div className="mx-2 rounded-2xl px-3 pb-2.5 pt-2" style={{ background: BLUE_SOFT }}>
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-extrabold" style={{ color: BLUE }}>
                  Shopping
                </span>
                <span className="flex -space-x-1">
                  {(Object.keys(people) as Who[]).map((k) => (
                    <span
                      key={k}
                      className="flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-extrabold text-white ring-2"
                      style={{
                        background: people[k].color,
                        ['--tw-ring-color' as string]: BLUE_SOFT,
                      }}
                    >
                      {people[k].name[0]}
                    </span>
                  ))}
                </span>
              </div>
              {/* Add field: Alice types here */}
              <div className="mt-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-semibold">
                <FiPlus style={{ color: BLUE }} />
                {owner === 'alice' && typed ? (
                  <span>
                    {typed}
                    {steps[step].id === 'typing' && (
                      <span className="ml-px inline-block h-2.5 w-px animate-blink bg-current align-middle" />
                    )}
                  </span>
                ) : (
                  <span className="text-black/35">Add an item</span>
                )}
              </div>
            </div>

            {/* Items */}
            <ul className="mt-2 space-y-1.5 px-2">
              {items.map((it) => {
                const isMilk = it.name === 'Milk';
                const done = it.name === 'Bread' && breadDone;
                return (
                  <li
                    key={it.name}
                    className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{
                      gridTemplateRows: !isMilk || milkVisible ? '1fr' : '0fr',
                      opacity: !isMilk || milkVisible ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="flex items-center gap-2 rounded-xl bg-white px-2 py-1.5 transition-shadow duration-500"
                        style={{
                          boxShadow:
                            isMilk && owner === 'theo' && steps[step].id === 'synced'
                              ? `0 0 0 2px ${people.alice.color}`
                              : '0 1px 0 rgb(0 0 0 / 0.04)',
                        }}
                      >
                        <span
                          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 text-[9px] text-white transition-colors duration-200"
                          style={{
                            borderColor: done ? BLUE : '#c9c6bf',
                            background: done ? BLUE : 'transparent',
                          }}
                        >
                          {done && <FiCheck strokeWidth={4} />}
                        </span>
                        <span
                          className={`flex-1 text-[11px] font-bold transition-colors duration-200 ${done ? 'text-black/35 line-through' : ''}`}
                        >
                          {it.name}
                        </span>
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: people[it.by].color }}
                          title={people[it.by].name}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Live update banner */}
            <div
              className="absolute inset-x-2 top-8 flex items-center gap-2 rounded-xl bg-white/90 px-2.5 py-2 text-[10px] shadow-[0_10px_24px_-10px_rgb(0_0_0/0.35)] backdrop-blur transition-[transform,opacity] duration-300 ease-out"
              style={{
                opacity: banner ? 1 : 0,
                transform: banner ? 'none' : 'translateY(-10px)',
              }}
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-extrabold text-white"
                style={{ background: banner ? people[banner.who].color : INK }}
              >
                {banner ? people[banner.who].name[0] : ''}
              </span>
              <span className="font-bold">{banner ? `${people[banner.who].name} ${banner.text}` : ''}</span>
            </div>

            {/* Bottom tab bar */}
            <div className="mt-auto px-2 pb-2">
              <div className="flex justify-around rounded-2xl bg-white py-1.5 text-[8px] font-bold text-black/45 shadow-[0_6px_16px_-8px_rgb(0_0_0/0.25)]">
                {['Home', 'Calendar', 'Lists', 'Chores'].map((t) => (
                  <span key={t} style={t === 'Lists' ? { color: BLUE } : undefined}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="mx-auto mt-1.5 block h-[3px] w-14 rounded-full bg-black/80" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-muted">
        <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
        {p.name}’s phone
      </p>
    </div>
  );
};

const HearthDemo = () => {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current) setStep(steps.length - 1);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.35,
    });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  // Advance through the loop while on screen.
  useEffect(() => {
    if (!visible || reduce.current) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % steps.length), steps[step].ms);
    return () => clearTimeout(t);
  }, [step, visible]);

  // Alice types "Milk" letter by letter, then the field clears once it's added.
  useEffect(() => {
    const id = steps[step].id;
    if (id === 'typing') {
      const word = 'Milk';
      const timers = Array.from(word, (_, i) => setTimeout(() => setTyped(word.slice(0, i + 1)), 150 + i * 190));
      return () => timers.forEach(clearTimeout);
    }
    if (id === 'idle' || id === 'added') setTyped('');
  }, [step]);

  // The phones are drawn at a fixed size and scaled down as one picture on narrow screens,
  // so their contents never reflow or get cramped.
  const DESIGN_WIDTH = 440;
  const stage = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [stageHeight, setStageHeight] = useState<number>();
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const s = Math.min(1, (root.current?.clientWidth ?? DESIGN_WIDTH) / DESIGN_WIDTH);
      setScale(s);
      setStageHeight(el.offsetHeight * s);
    });
    ro.observe(el);
    if (root.current) ro.observe(root.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[460px]">
      <div style={{ height: stageHeight }}>
        <div
          ref={stage}
          className="mx-auto grid origin-top-left grid-cols-2 items-start gap-5"
          style={{ width: DESIGN_WIDTH, transform: scale < 1 ? `scale(${scale})` : undefined }}
        >
          <div className="-rotate-2">
            <Phone owner="alice" step={step} typed={typed} />
          </div>
          <div className="mt-8 rotate-2">
            <Phone owner="theo" step={step} typed={typed} />
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-muted">Sample family · one list, updating live on every phone</p>
    </div>
  );
};

export default HearthDemo;
