import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import type { MouseEvent } from 'react';

// Tiny event-based toast so any component can confirm an action.
export const toast = (message: string) => window.dispatchEvent(new CustomEvent('app:toast', { detail: message }));

export const openPalette = () => window.dispatchEvent(new Event('app:palette'));

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#131411' : '#f4f3ef');
  }, [dark]);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    window.addEventListener('app:theme', sync);
    return () => window.removeEventListener('app:theme', sync);
  }, []);

  // Switch theme with a circle that grows from the clicked control (View Transitions where supported).
  const toggle = useCallback((origin?: { x: number; y: number }) => {
    const apply = () => {
      const next = !document.documentElement.classList.contains('dark');
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        /* storage blocked: theme still applies for this visit */
      }
      window.dispatchEvent(new Event('app:theme'));
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) {
      apply();
      return;
    }

    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    document.documentElement.classList.add('theme-switching');
    const vt = document.startViewTransition(() => flushSync(apply));
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 560, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
    vt.finished.finally(() => document.documentElement.classList.remove('theme-switching'));
  }, []);

  return { dark, toggle };
}

export async function copyText(text: string, done: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast(done);
  } catch {
    toast(text);
  }
}

// Feed the cursor position to a `.spot` element as CSS variables.
export function trackSpot(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
}

export function useCapeTownTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-ZA', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Johannesburg' }).format(
      new Date()
    );
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}
