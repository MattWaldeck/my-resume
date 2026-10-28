// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

// Colours are CSS variables (rgb triplets) so the light/dark theme can swap them.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './marketing/**/*.{html,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Schibsted Grotesk"', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        paper: v('paper'),
        'paper-2': v('paper-2'),
        card: v('card'),
        ink: v('ink'),
        'ink-2': v('ink-2'),
        muted: v('muted'),
        line: v('line'),
        accent: v('accent'),
        'accent-dark': v('accent-dark'),
        rust: v('rust'),
        ok: v('ok'),
        night: v('night'),
        'night-fg': v('night-fg'),
        term: '#121411',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(0.35em)', filter: 'blur(8px)' },
          to: { opacity: '1', transform: 'none', filter: 'blur(0)' },
        },
        unveil: {
          from: { clipPath: 'inset(100% 0 0 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        sweep: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1s step-end infinite',
        rise: 'rise 700ms cubic-bezier(0.23, 1, 0.32, 1) both',
        unveil: 'unveil 1100ms cubic-bezier(0.77, 0, 0.175, 1) both',
        sweep: 'sweep 1400ms cubic-bezier(0.77, 0, 0.175, 1) both',
      },
    },
  },
  plugins: [],
};
