/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F5F6F7',
          100: '#E8EAED',
          200: '#C9CDD4',
          300: '#9BA2AD',
          400: '#6B7280',
          500: '#4A5058',
          600: '#363B42',
          700: '#262A30',
          800: '#1B1E23',
          900: '#12151A',
          950: '#0C0E12',
        },
        paper: {
          DEFAULT: '#FBFBF9',
          dim: '#F2F1EC',
        },
        line: {
          DEFAULT: '#2F5FE0',
          50: '#EEF2FD',
          100: '#DCE6FC',
          200: '#B4C7F8',
          300: '#7E9BF0',
          400: '#4E75E8',
          500: '#2F5FE0',
          600: '#2247C4',
          700: '#1C3A9E',
          800: '#182F7D',
          900: '#152863',
        },
        mark: {
          DEFAULT: '#D14D0F',
          50: '#FDF1EA',
          400: '#E06B27',
          500: '#D14D0F',
          600: '#B03F0A',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'draw': 'draw 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
