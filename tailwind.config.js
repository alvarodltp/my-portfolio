/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'dark:bg-gray-900',
    'dark:text-gray-100',
    'dark:bg-gray-800',
    'dark:text-gray-300',
    'bg-gray-100',
    'text-gray-700',
    'bg-white',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
