import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0fdf9',
          '100': '#cafdf0',
          '200': '#96f9e1',
          '300': '#71f1d7',
          '400': '#27dabb',
          '500': '#0fbda2',
          '600': '#089985',
          '700': '#0c796c',
          '800': '#0e6157',
          '900': '#115049',
          '950': '#03302d',
        },
        'dark-navy': '#020c1b',
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        pink: '#f57dff',
        blue: '#57cbff',
      },
    },
  },
  plugins: [],
};
export default config;
