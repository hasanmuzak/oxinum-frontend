module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix:'tw-',
  theme: {
    extend: {},
    container: {
      screens: {
         sm: "100%",
         md: "720px",
         lg: "960px",
         xl: "1140px",
         '2xl' : '1320px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
