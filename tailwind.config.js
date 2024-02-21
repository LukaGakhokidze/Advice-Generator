/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'Light-Cyan': 'hsl(193, 38%, 86%)',
      'Neon-Green': 'hsl(150, 100%, 66%)',
      'Greyish-Blue': 'hsl(217, 19%, 38%)',
      'Dark-Greyish-Blue': 'hsl(217, 19%, 24%)',
      'Dark-Blue': 'hsl(218, 23%, 16%)'
    },
    screens: { desktop: '1200px' },
    extend: {
      boxShadow: {
        custom: '30px 50px 80px 0 hsl(0,0%,0%) ',
        btn: '0 0 40px 10px hsl(150,100%,66%)'
      }
    }
  },
  plugins: []
};
