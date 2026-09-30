import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2238',
          secondary: '#153451',
        },
        accent: {
          DEFAULT: '#0068F0',
          hover: '#005ACF',
        },
        paper: '#FFFFFF',
        mist: '#F5F8FB',
        ink: '#17202A',
        muted: '#647383',
        line: '#D8E0EA',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1080px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'rise': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        rise: 'rise 0.55s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
