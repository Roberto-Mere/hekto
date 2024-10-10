/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      'gray-1': '#f8f8fd',
      'gray-2': '#e5e0fc',
      'gray-3': '#8a8fb9',
      black: '#101750',
      primary: '#fb2e86',
      'primary-dark': '#f0056a',
      'primary-light': '#fc5fa2',
      secondary: '#f9ba00',
      'secondary-light': '#fff3ce',
      tertiary: '#7e33e0',
      danger: '#fb2448',
      'danger-light': '#feb9c4',
      info: '#603eff',
      'info-light': '#ddd6ff',
      success: '#0cc562',
      'success-dark': '#00994c',
      'success-light': '#92f2bf',
    },
    fontFamily: {
      lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      sm: ['1.4rem', '1.6rem'],
      base: ['1.6rem', '2rem'],
      xl: ['1.8rem', '2.4rem'],
      sub1: ['2.6rem', '3.2rem'],
      sub2: ['2.2rem', '2.8rem'],
      sub3: ['2rem', '2.4rem'],
      h1: ['5.2rem', '6.4rem'],
      h2: ['4.4rem', '5.2rem'],
      h3: ['3.6rem', '4.4rem'],
      h4: ['2.8rem', '3.6rem'],
    },
    spacing: {
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      40: '4rem',
      48: '4.8rem',
      60: '6rem',
      96: '9.6rem',
      128: '12.8rem',
    },
    extend: {
      letterSpacing: {
        heading: '1.5%',
      },
      padding: {
        sides: '30.4rem',
      },
      backgroundImage: {
        newsletter: "url('./src/assets/image/subscribe.png')",
      },
      backgroundPosition: {
        'bottom-4': 'bottom 15% center',
      },
    },
  },
  plugins: [],
};
