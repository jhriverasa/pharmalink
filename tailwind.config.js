module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pic-login': "url('/fondo_login.png')",
        'pic-logo': "url('/logo_pl.png')",
        'pic-key': "url('/llave_login.jpeg')"
       }),
       fontFamily: { Rosario: 'Rosario' },
       colors: {
        'login-blue': '#88a7d0',
        'login-green': '#57bd9e',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
