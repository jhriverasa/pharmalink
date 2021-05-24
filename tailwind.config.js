module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pic-login': "url('/fondo_login.png')",
        'pic-logo': "url('/logo_pl.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
