import { useRef } from 'react';
import type { ReactNode } from 'react';

// Pulls its child gently toward the cursor, then springs back. Mouse only; touch is left alone.
const Magnetic = ({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) => {
  const el = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== 'mouse' || !el.current) return;
    const r = el.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.current.style.transition = 'transform 120ms cubic-bezier(0.23, 1, 0.32, 1)';
    el.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const leave = () => {
    if (!el.current) return;
    el.current.style.transition = 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    el.current.style.transform = 'translate(0, 0)';
  };

  return (
    <span ref={el} onPointerMove={move} onPointerLeave={leave} className="inline-flex motion-reduce:!transform-none">
      {children}
    </span>
  );
};

export default Magnetic;
