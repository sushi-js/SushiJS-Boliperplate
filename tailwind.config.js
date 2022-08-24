const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/common/components/elements/**/*.{js,ts,jsx,tsx}',
    '.src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'gray-1000': '#050505',
          gray: colors.neutral,
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-350px * 3))' },
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
}
