import { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const Toaster = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2200);
    };
    window.addEventListener('app:toast', show);
    return () => {
      window.removeEventListener('app:toast', show);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 transition-[opacity,transform,filter] duration-200 ease-out ${
        message ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-sm'
      }`}
    >
      <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-[0_12px_32px_-12px_rgb(0_0_0/0.5)]">
        <FiCheck className="text-accent" /> {message}
      </div>
    </div>
  );
};

export default Toaster;
