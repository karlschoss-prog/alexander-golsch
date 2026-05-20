/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A6B7A',
          light: '#E3F4F7',
          mid: '#5DAAB8',
          dark: '#135868',
        },
        bg: '#FAFAF8',
        surface: '#F2F6F7',
        ink: '#1A1A18',
        muted: '#6B6860',
        subtle: '#9E9B96',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
