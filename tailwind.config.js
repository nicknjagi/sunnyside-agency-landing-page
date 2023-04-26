/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        'Soft-red': 'hsl(7, 99%, 70%)',
        Yellow: 'hsl(51, 100%, 49%)',
        'Dark-desaturated-cyan-(graphic-design-text)': 'hsl(167, 40%, 24%)',
        'Dark-blue-(photography-text)': 'hsl(198, 62%, 26%)',
        'Dark-moderate-cyan-(footer)': 'hsl(168, 34%, 41%)',
        'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'Grayish-blue': 'hsl(210, 4%, 67%)',
        White: 'hsl(0, 0%, 100%)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

