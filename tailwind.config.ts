import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1750px',
      },
      fontFamily: {
        exo2: ['var(--font-exo2)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        gradientMain: 'var(--gradient)',
      },
      backgroundImage: {
        gradient: 'var(--gradient)',
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
        scrollDown: {
          '0%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(-20px, -20px)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(20px, 20px)',
          },
        },
      },
      animation: {
        scrollReveal: 'scrollReveal linear forwards',
        scrollDown: 'scrollDown 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
