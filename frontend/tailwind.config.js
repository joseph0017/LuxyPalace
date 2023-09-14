/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '150': '36rem',
        '200': '60rem'
      },
      height: {
        '128': '32rem',
        '150': '44rem'
      },
      margin: {
        '128': '32rem',
        '130': '35rem',
        '150': '44rem'
      }
    }
  },
  plugins: []
};
