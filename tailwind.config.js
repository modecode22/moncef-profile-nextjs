/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:"class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
            colors:{
    pr:"#f5f3f4",
    pr1:"#6fffe9",
    pr2:"#5bc0be",
    pr3:"#3a506b",
    pr4:"#1c2541",
    pr5:"#0b132b",
  },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
