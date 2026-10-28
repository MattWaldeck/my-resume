import { useEffect, useMemo, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiCopy, FiDownload, FiMoon, FiSearch } from 'react-icons/fi';
import { navLinks, profile } from '../data';
import { copyText, useTheme } from '../lib/ui';

interface Command {
  label: string;
  group: string;
  icon: IconType;
  run: () => void;
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
const open = (url: string) => window.open(url, '_blank', 'noopener');

const CommandPalette = () => {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const { toggle } = useTheme();

  const commands = useMemo<Command[]>(
    () => [
      ...navLinks.map((l) => ({ label: `Go to ${l.label}`, group: 'Jump to', icon: FiArrowRight, run: () => go(l.id) })),
      { label: 'Copy email address', group: 'Actions', icon: FiCopy, run: () => copyText(profile.email, 'Email copied') },
      {
        label: 'Download resume (PDF)',
        group: 'Actions',
        icon: FiDownload,
        run: () => {
          const a = document.createElement('a');
          a.href = profile.cv;
          a.download = 'Matthew_Waldeck_CV_2026.pdf';
          a.click();
        },
      },
      { label: 'Switch light / dark theme', group: 'Actions', icon: FiMoon, run: () => toggle() },
      { label: 'Message on WhatsApp', group: 'Elsewhere', icon: FaWhatsapp, run: () => open(profile.whatsapp) },
      { label: 'Open LinkedIn', group: 'Elsewhere', icon: FaLinkedin, run: () => open(profile.linkedin) },
      { label: 'Open GitHub', group: 'Elsewhere', icon: FaGithub, run: () => open(profile.github) },
    ],
    [toggle]
  );

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /INPUT|TEXTAREA/.test(e.target.tagName);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('app:palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('app:palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => input.current?.focus());
    }
  }, [isOpen]);

  const run = (c?: Command) => {
    if (!c) return;
    setOpen(false);
    c.run();
  };

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === 'Enter') {
      run(results[active]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  let lastGroup = '';

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh] transition-opacity duration-200 ease-out ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-term/40 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onKeyDown={onListKey}
        className={`relative w-full max-w-lg origin-top overflow-hidden rounded-xl border border-line bg-card shadow-[0_30px_80px_-20px_rgb(0_0_0/0.45)] transition-[transform,filter] duration-200 ease-out ${
          isOpen ? 'scale-100 blur-0' : 'scale-[0.97] blur-[2px]'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <FiSearch className="shrink-0 text-muted" />
          <input
            ref={input}
            id="command-search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Jump to a section or run an action…"
            className="h-14 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
            tabIndex={isOpen ? 0 : -1}
          />
          <span className="kbd">esc</span>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">No matches for “{query}”.</li>}
          {results.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : null;
            lastGroup = c.group;
            const Icon = c.icon;
            return (
              <li key={c.label}>
                {header && <p className="px-3 pb-1 pt-3 text-xs font-medium text-muted">{header}</p>}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  tabIndex={-1}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(c)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-100 ${
                    i === active ? 'bg-paper-2 text-ink' : 'text-ink-2'
                  }`}
                >
                  <Icon className="shrink-0 text-muted" />
                  {c.label}
                  {i === active && <span className="kbd ml-auto">↵</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
