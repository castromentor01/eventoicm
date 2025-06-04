/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#8da8d2',
          400: '#668bc3',
          500: '#406eb4',
          600: '#335890',
          700: '#26426c',
          800: '#1a2c48',
          900: '#0d1624',
        },
        yellow: {
          500: '#E6B62F',
          600: '#D4A424',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(13, 22, 36, 0.1), 0 10px 10px -5px rgba(13, 22, 36, 0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};