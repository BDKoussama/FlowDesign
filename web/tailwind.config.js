const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        main : "#F8F8F8",
        grayShade : "#969594",
        black : "#1E1D1D",
        dark : "#000000"
      },
      lineHeight: {
        tight: 1.1,
      },
      fontSize: {
        '10xl' : '10vw'
      },
      boxShadow: {
        small: '-2px 2px currentColor',
        medium: '-6px 6px currentColor',
        large : "7px 1px #1E1D1D"
      },
      rotate: {
        '6' : '6deg',
        '8': '8deg',
        '135' : '135deg'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      borderRadius: {
        'none': '0',
        'md': '14rem',
        '50' : '50%'
      },
      height: {
        '112' : '33rem',
        '126': '44rem',
      },
      width: {
        '180': '180%',
      },
      gridTemplateColumns : {
        'custom' : '31.77%  27.06% 27.06% 14.11%'
      }
    },
  },
  plugins: [],
}