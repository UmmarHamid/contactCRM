/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: [{ max: '1024px' }],
      },
      colors: {
        blue: {
          primary: '#3056D3',
        },
        green: {
          primary: '#13C296',
        },
        text: {
          primary: '#637381',
        },
        dark: {
          primary: '#090E34',
        },
        grey: {
          primary: '#E0E0E0',
          dark: '#637381',
        },
        text: {
          primary: '#212B36',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '4xs': '14px',
        '3xs': '16px',
        '2xs': '18px',
        xs: '20px',
        sm: '24px',
        md: '28px',
        lg: '36px',
        xl: '44px',
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        semibold: 600,
        medium: 500,
        normal: 400,
        light: 300,
      },
      lineHeight: {
        '4xs': '22px',
        '3xs': '24px',
        '2xs': '24px',
        xs: '26px',
        sm: '30px',
        md: '35px',
        lg: '45px',
        xl: '55px',
      },
    },
  },
  plugins: [],
};
