import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { FiCheck, FiChevronLeft, FiMapPin, FiPause, FiPlay, FiRotateCcw, FiZap } from 'react-icons/fi';

// The demo plays like a short screen recording: point, capture, locate, scan, measure, rate, estimate, send.
const steps = [
  { id: 'camera', ms: 1300, caption: 'Point the camera at the pothole' },
  { id: 'capture', ms: 450, caption: 'Photo captured' },
  { id: 'locate', ms: 900, caption: 'Pinning the exact GPS location' },
  { id: 'scan', ms: 1400, caption: 'AI scans the photo' },
  { id: 'measure', ms: 900, caption: 'Width and depth measured' },
  { id: 'severity', ms: 900, caption: 'Severity rated' },
  { id: 'estimate', ms: 1200, caption: 'Material estimate for the road crew' },
  { id: 'sent', ms: 1900, caption: 'Report sent to the staff dashboard' },
] as const;

const total = steps.reduce((t, s) => t + s.ms, 0);
const photo = `${import.meta.env.BASE_URL}assets/img/pothole-demo.jpg`;

// Illustrative numbers: a 0.9 m × 0.6 m elliptical hole, 7 cm deep.
const measure = { width: '0.9 m', depth: '7 cm', volume: '≈ 30 L', mix: '≈ 70 kg cold-mix' };

const StatusBar = () => (
  <div className="relative flex h-11 shrink-0 items-center justify-between px-7 pt-1 text-[13px] font-semibold text-[#161714]">
    <span className="tnum">9:41</span>
    <span className="absolute left-1/2 top-2.5 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
    <span className="flex items-center gap-1.5">
      <svg width="17" height="11" viewBox="0 0 17 11" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={i * 4.5} y={8 - i * 2.6} width="3" height={3 + i * 2.6} rx="0.8" fill="currentColor" />
        ))}
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11" aria-hidden="true">
        <path d="M7.5 10.5 5.3 8.3a3.1 3.1 0 0 1 4.4 0L7.5 10.5Z" fill="currentColor" />
        <path d="M3.4 6.4a5.8 5.8 0 0 1 8.2 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M1 3.9a9.2 9.2 0 0 1 13 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" aria-hidden="true">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.2" stroke="currentColor" strokeOpacity="0.4" fill="none" />
        <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
        <rect x="23" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" fillOpacity="0.45" />
      </svg>
    </span>
  </div>
);

const Viewfinder = ({ show }: { show: boolean }) => (
  <div className={`pointer-events-none absolute inset-3 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
    {['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map(
      (c) => (
        <span key={c} className={`absolute h-5 w-5 rounded-[3px] border-white/90 ${c}`} />
      )
    )}
  </div>
);

const PotholeDemo = () => {
  const [step, setStep] = useState(0);
  const [loop, setLoop] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      setStep(6);
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    const t = setTimeout(() => {
      if (step === steps.length - 1) {
        setStep(0);
        setLoop((l) => l + 1);
      } else {
        setStep(step + 1);
      }
    }, steps[step].ms);
    return () => clearTimeout(t);
  }, [step, playing, visible]);

  const at = (id: (typeof steps)[number]['id']) => step >= steps.findIndex((s) => s.id === id);
  const is = (id: (typeof steps)[number]['id']) => steps[step].id === id;
  const elapsed = steps.slice(0, step).reduce((t, s) => t + s.ms, 0);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 14, y: -((e.clientY - r.top) / r.height - 0.5) * 10 });
  };

  const replay = () => {
    setStep(0);
    setLoop((l) => l + 1);
    setPlaying(true);
  };

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[310px]">
      {/* Soft floor shadow under the phone */}
      <div className="absolute -bottom-6 left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-2xl dark:bg-black/60" />

      <div className="[perspective:1400px]" onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
        <div
          className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
          style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
        >
          {/* Side buttons */}
          <span className="absolute -left-[3px] top-[18%] h-7 w-[3px] rounded-l bg-[#2b2b2d]" />
          <span className="absolute -left-[3px] top-[27%] h-12 w-[3px] rounded-l bg-[#2b2b2d]" />
          <span className="absolute -left-[3px] top-[37%] h-12 w-[3px] rounded-l bg-[#2b2b2d]" />
          <span className="absolute -right-[3px] top-[30%] h-16 w-[3px] rounded-r bg-[#2b2b2d]" />

          {/* Titanium frame */}
          <div className="rounded-[54px] bg-gradient-to-br from-[#5b5b5f] via-[#2a2a2d] to-[#4a4a4e] p-[3px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.08)]">
            <div className="rounded-[51px] bg-black p-[9px]">
              {/* Screen */}
              <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[42px] bg-[#f4f3ef] text-[#161714]">
                <StatusBar />

                {/* Recording-style progress */}
                <div className="mx-5 h-[3px] overflow-hidden rounded-full bg-[#161714]/10">
                  <div
                    key={loop}
                    className="h-full origin-left rounded-full bg-[#e8b64c]"
                    style={{
                      animation: `demo-progress ${total}ms linear both`,
                      animationDelay: `-${elapsed}ms`,
                      animationPlayState: playing && visible ? 'running' : 'paused',
                    }}
                  />
                </div>

                <div className="flex items-center gap-2 px-4 pb-2 pt-3">
                  <FiChevronLeft className="text-lg text-[#8a3b22]" />
                  <span className="text-[15px] font-semibold">New report</span>
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-[#2f782a]/12 px-2 py-0.5 text-[10px] font-semibold text-[#2f782a]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f782a]" /> GPS
                  </span>
                </div>

                {/* Camera / photo */}
                <div className="relative mx-3 aspect-[4/3] shrink-0 overflow-hidden rounded-2xl bg-[#3b3a36]">
                  <img
                    src={photo}
                    alt="Pothole on an asphalt road, photographed from above"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
                      is('camera') ? 'scale-[1.12]' : 'scale-100'
                    }`}
                  />
                  <Viewfinder show={is('camera')} />
                  <span
                    className={`absolute inset-0 bg-white transition-opacity ${is('capture') ? 'opacity-90 duration-75' : 'opacity-0 duration-300'}`}
                  />
                  {is('scan') && (
                    <span className="absolute inset-x-0 h-10 animate-sweep bg-gradient-to-b from-transparent via-[#e8b64c]/55 to-transparent" />
                  )}
                  <div
                    className={`absolute left-[25%] top-[22%] h-[57%] w-[50%] rounded-[46%] border-2 border-dashed border-[#e8b64c] shadow-[0_0_0_9999px_rgb(0_0_0/0.2)] transition-[opacity,transform] duration-300 ease-out ${
                      at('measure') ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  />
                  <div
                    className={`absolute left-[25%] top-[81%] w-[50%] transition-[clip-path] delay-150 duration-500 ease-out ${
                      at('measure') ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_100%_0_0)]'
                    }`}
                  >
                    <span className="block h-px w-full bg-[#e8b64c]" />
                    <span className="mx-auto mt-1 block w-fit rounded bg-[#e8b64c] px-1 font-mono text-[9px] font-medium text-[#161714]">
                      W {measure.width}
                    </span>
                  </div>
                  <span
                    className={`absolute right-2 top-2 rounded-md bg-black/65 px-1.5 py-0.5 font-mono text-[9px] text-white backdrop-blur-sm transition-opacity delay-300 duration-300 ${
                      at('measure') ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    depth {measure.depth}
                  </span>
                  <span
                    className={`absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition-opacity duration-200 ${
                      is('camera') ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Hold steady
                  </span>
                </div>

                {/* Report details */}
                <div className="flex flex-1 flex-col gap-2.5 px-4 pt-3 text-[11px]">
                  <p className="tnum flex items-center gap-1.5 font-mono text-[10px] text-[#5d5f59]">
                    <FiMapPin className={`text-[#8a3b22] transition-transform duration-300 ease-out ${at('locate') ? 'translate-y-0' : '-translate-y-1'}`} />
                    {at('scan') ? '-33.83, 18.65 · Durbanville' : at('locate') ? 'Locating…' : 'Waiting for photo'}
                  </p>

                  {/* Mini map: the pin drops once the location is found */}
                  <div className="relative h-[74px] shrink-0 overflow-hidden rounded-lg bg-[#e6e3da]">
                    <svg viewBox="0 0 260 74" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
                      <rect width="260" height="74" fill="#e6e3da" />
                      <path d="M-10 52 C 60 44, 120 60, 270 40" stroke="#fff" strokeWidth="9" fill="none" />
                      <path d="M70 -10 L 96 90" stroke="#fff" strokeWidth="6" fill="none" />
                      <path d="M180 -10 C 170 30, 190 50, 176 90" stroke="#fff" strokeWidth="5" fill="none" />
                      <path d="M-10 18 L 270 10" stroke="#fff" strokeWidth="4" fill="none" />
                      <rect x="112" y="16" width="42" height="20" rx="3" fill="#cfe0c3" />
                      <rect x="200" y="50" width="38" height="18" rx="3" fill="#d9d5ca" />
                    </svg>
                    <span
                      className={`absolute left-[47%] top-[48%] h-6 w-6 -translate-x-1/2 rounded-full bg-[#8a3b22]/25 transition-[transform,opacity] duration-500 ease-out ${
                        at('scan') ? 'scale-[2.2] opacity-0' : 'scale-50 opacity-0'
                      }`}
                    />
                    <FiMapPin
                      className={`absolute left-[47%] top-[18%] -translate-x-1/2 text-[22px] text-[#8a3b22] drop-shadow transition-[transform,opacity] duration-300 ease-out ${
                        at('scan') ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                      }`}
                      fill="#8a3b22"
                      stroke="#fff"
                    />
                    <span className="absolute bottom-1 right-1.5 text-[8px] font-medium text-[#5d5f59]">Durbanville</span>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dcdad3]">
                        <span
                          className="block h-full origin-left bg-[#8a3b22] transition-transform duration-300 ease-out"
                          style={{
                            transform: `scaleX(${at('severity') && n <= 4 ? 1 : 0})`,
                            transitionDelay: at('severity') ? `${n * 110}ms` : '0ms',
                          }}
                        />
                      </span>
                    ))}
                  </div>
                  <p className="text-[#5d5f59]">{at('severity') ? 'Severity 4 / 5 · Hazardous' : 'Severity —'}</p>

                  <div
                    className={`grid overflow-hidden rounded-lg bg-[#e9e7e2] transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      at('estimate') ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="tnum px-2.5 py-2 leading-snug">
                        <span className="font-semibold">To fill:</span> {measure.volume} · {measure.mix}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mt-auto flex items-center justify-center gap-2 rounded-xl py-2.5 font-semibold transition-[background-color,transform] duration-200 ease-out ${
                      is('sent') ? 'scale-[0.98] bg-[#2f782a] text-white' : 'bg-[#161714] text-[#f4f3ef]'
                    }`}
                  >
                    {is('sent') ? <FiCheck /> : <FiZap className="text-[#e8b64c]" />}
                    {is('sent') ? 'Report sent' : at('scan') && !at('estimate') ? 'Measuring…' : 'Submit report'}
                  </div>
                </div>

                {/* Notification banner */}
                <div
                  className={`absolute inset-x-3 top-12 flex items-center gap-2.5 rounded-2xl bg-white/85 p-2.5 shadow-[0_10px_30px_-10px_rgb(0_0_0/0.35)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out ${
                    is('sent') ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#161714] text-[#e8b64c]">
                    <FiMapPin />
                  </span>
                  <span className="text-[11px] leading-tight">
                    <span className="block font-semibold">Road crew notified</span>
                    <span className="text-[#5d5f59]">Durbanville · added to the repair queue</span>
                  </span>
                </div>

                {/* Home indicator */}
                <span className="mx-auto mb-2 mt-3 h-[5px] w-28 shrink-0 rounded-full bg-[#161714]" />

                {/* Glass glare */}
                <span className="pointer-events-none absolute inset-0 rounded-[42px] bg-gradient-to-br from-white/25 via-transparent to-transparent mix-blend-soft-light" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Player controls */}
      <div className="relative mt-8 flex items-center justify-between gap-3">
        <p className="min-h-[2.5em] text-xs leading-snug text-muted" aria-live="polite">
          <span key={step} className="inline-block animate-rise">
            {steps[step].caption}
          </span>
        </p>
        <div className="flex shrink-0 gap-1.5">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause demo' : 'Play demo'}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-card text-ink-2 transition-transform duration-150 ease-out active:scale-90"
          >
            {playing ? <FiPause /> : <FiPlay />}
          </button>
          <button
            type="button"
            onClick={replay}
            aria-label="Replay demo"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-card text-ink-2 transition-transform duration-150 ease-out active:scale-90"
          >
            <FiRotateCcw />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PotholeDemo;
