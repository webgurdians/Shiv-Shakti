/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'shiv-navy': {
          DEFAULT: '#082567',
          deep: '#041740',
          light: '#0E3A9E',
        },
        'shiv-blue': {
          DEFAULT: '#1152D4',
          hover: '#0C41AC',
          light: '#EBF2FE',
        },
        'shakti-red': {
          DEFAULT: '#D31027',
          hover: '#B50B1E',
          soft: '#FEE2E2',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EBE5B',
          dark: '#075E54',
        },
        'festival-gold': {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#B45309',
        },
      },
      fontFamily: {
        bengali: [
          '"Hind Siliguri"',
          '"Noto Sans Bengali"',
          '"Kohinoor Bangla"',
          '"Bangla Sangam MN"',
          '"Bangla MN"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          '"Plus Jakarta Sans"',
          '"Hind Siliguri"',
          '"Kohinoor Bangla"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
