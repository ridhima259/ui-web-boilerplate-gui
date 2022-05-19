module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Mulish'],
      },
      colors: {
        slategray: '#F6F9FC',
        bluetext: '#248EF8',
        homebg: '#E5E5E5',
        headerbg: '#ECECED',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
        6: '6 6 0%',
      },
      boxShadow: {
        '4xl':
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        '3xl': '0px 4px 27px 12px rgba(0, 0, 0, 0.12)',
      },
      display: ['group-hover'],
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
};
