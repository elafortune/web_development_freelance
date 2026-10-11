/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        // Palette "papier & stickers"
        paper: {
          DEFAULT: '#FFF7EC',
          dark: '#F6E9D6',
        },
        ink: {
          DEFAULT: '#17140F',
          soft: '#4A443B',
          muted: '#7A7266',
        },
        tomato: { DEFAULT: '#FF5B3A', dark: '#E2401F', light: '#FFD9CF' },
        lemon: { DEFAULT: '#FFD43B', light: '#FFF1B8' },
        mint: { DEFAULT: '#3DDC97', light: '#CDF5E2' },
        lilac: { DEFAULT: '#B79CFF', light: '#ECE4FF' },
        sky: { DEFAULT: '#7CC6FF', light: '#DDF0FF' },
        whatsapp: '#25D366',
      },
      boxShadow: {
        brutal: '4px 4px 0 0 #17140F',
        'brutal-sm': '2px 2px 0 0 #17140F',
        'brutal-lg': '8px 8px 0 0 #17140F',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
