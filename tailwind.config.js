module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.mdx'],
  darkMode: 'class', // or 'false' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1024px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
