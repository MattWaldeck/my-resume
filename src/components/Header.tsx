import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCommand, FiMoon, FiSun } from 'react-icons/fi';
import { navLinks, profile } from '../data';
import { openPalette, useTheme } from '../lib/ui';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState('');
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
          scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="wrap flex h-[68px] items-center justify-between gap-6">
          <a href="#top" className="flex shrink-0 items-baseline gap-2 whitespace-nowrap">
            <span className="font-display text-lg font-bold tracking-tight">{profile.name}</span>
            <span className="hidden text-sm text-muted sm:inline lg:hidden xl:inline">{profile.city}</span>
          </a>

          <nav className="hidden items-center lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-1.5 xl:px-3 text-sm font-medium transition-colors duration-200 ${
                  current === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left bg-accent transition-transform duration-300 ease-out ${
                    current === l.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={openPalette}
              className="hidden items-center gap-2 rounded-full border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-ink/30 hover:text-ink sm:flex"
              aria-label="Open command menu"
            >
              <FiCommand /> <span className="kbd !border-0 !bg-transparent !p-0">K</span>
            </button>
            <button
              type="button"
              onClick={(e) => toggle({ x: e.clientX, y: e.clientY })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink/30"
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span key={dark ? 'sun' : 'moon'} className="animate-rise">
                {dark ? <FiSun /> : <FiMoon />}
              </span>
            </button>
            <a href="#contact" className="btn-dark hidden whitespace-nowrap !px-5 !py-2.5 text-sm md:inline-flex">
              Get in touch
            </a>
          </div>
        </div>
        <span
          className="absolute bottom-[-1px] left-0 h-[2px] origin-left bg-accent"
          style={{ width: '100%', transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      {/* Floating menu button on small screens */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-4 rounded-full bg-night px-5 py-3.5 text-[13px] font-semibold text-night-fg shadow-[0_12px_30px_-10px_rgb(0_0_0/0.5)] transition-transform duration-150 ease-out active:scale-95 lg:hidden"
      >
        {open ? 'Close' : 'Menu'}
        <span className="grid grid-cols-2 gap-[3px]">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-[3px] w-[3px] bg-night-fg" />
          ))}
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-night px-6 pb-28 pt-24 text-night-fg transition-[clip-path] duration-500 ease-in-out lg:hidden ${
          open ? '[clip-path:circle(150%_at_90%_95%)]' : 'pointer-events-none [clip-path:circle(0%_at_90%_95%)]'
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-4xl font-bold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-6 text-sm text-white/70">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
