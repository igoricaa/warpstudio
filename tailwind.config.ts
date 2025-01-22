import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['var(--font-exo2)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      padding: {
        side: 'var(--padding-side)',
      },
      backgroundSize: {
        scrollReveal: '0% 100%',
      },
      keyframes: {
        scrollReveal: {
          to: {
            backgroundSize: '100% 100%',
          },
        },
      },
      animation: {
        scrollReveal: 'scrollReveal linear forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
