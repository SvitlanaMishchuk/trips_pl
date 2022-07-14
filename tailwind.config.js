/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      souv: ['Souvenir', 'sans-serif'],
    },
    fontSize: {
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3.125rem',
    },
    colors: {
      primary: '#ce4532',
      secondary: '#f6f4f2',
      'dark-secondary': '#e9e2d2',

      text: '#3c3c3c',
      textSecondary: '#272728',

      shadow: '#282827',

      white: '#ffffff',
      charcoal: '#2e4053',
    },
    extend: {
      margin: {
        '2px': '2px',
        '3px': '3px',
      },
      minWidth: {
        62: '15.5rem',
      },
    },
  },
  plugins: [],
};
