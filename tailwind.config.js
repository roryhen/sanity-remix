/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'very-light-yellow': 'hsl(20, 100%, 99%)',
        yellow: 'hsl(51, 100%, 49%)',
        'dark-desat-green': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-mod-cyan': ' hsl(168, 34%, 41%)',
        'very-dark-desat-blue': 'hsl(212, 27%, 19%)',
        'very-dark-gray-blue': 'hsl(213, 9%, 39%)',
        'dark-gray-blue': 'hsl(232, 10%, 55%)',
        'gray-blue': 'hsl(210, 4%, 67%)',
        cyan: 'hsl(200, 100%, 62%)',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
