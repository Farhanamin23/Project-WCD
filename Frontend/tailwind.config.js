module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Chau Philomene One', 'sans-serif'],
        'secondary': ['Titillium Web', 'sans-serif'],
        'tertiary': ['Inter', 'sans-serif']
      },
      colors: {
        'p-primary': '#DF1382',
        'p-yellow': '#FEC10D',
        'p-yellow-2': '#FDC00F',
        'p-yellow-3': '#FEC00E',
        'p-blue': '#488BC9',
        'p-gray': '#667085',
        'p-light-gray': '#E4E7EC',
        'p-pink': '#FFD8ED',
        'p-neutral': '#344054'
      },
      backgroundImage: {
        'dot-pattern': "url('/public/img/bg-dot.webp')",
        'mascot': "url('/public/img/bg-indonesia-bersih-transparent.webp')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}