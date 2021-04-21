module.exports = {
  purge: {
    enabled: true,
    content: ['public/*.html',]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'phone':{'min':'280px', 'max':'547px'},
      'sm-phone': '280px',
      'lg-phone': '411px',

      'monitors': { 'min': '640px', 'max': '1536px' },
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'wide-desktop': '1536px',
    },

    fontSize: {
      xss: '0.5rem',
      ss: '0.563rem',
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
