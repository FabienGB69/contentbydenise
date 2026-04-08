import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf9f6',
        foreground: '#141414',
        accent: '#7a6a58',
        muted: '#f2efe8',
        line: '#e7e1d7',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px -20px rgba(20,20,20,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
