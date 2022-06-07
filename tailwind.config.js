module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [require('daisyui')],
};
