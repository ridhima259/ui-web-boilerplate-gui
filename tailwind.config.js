module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors:{
        'cream': '#FAF5F0'
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [],
};
