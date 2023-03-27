module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0F0F0F',
        orange: {
          neon: '#FF581B'
        },
        smoke: '#2A2A2A'
      },
      fontFamily: {
        digital: ['digital-7', 'sans-serif']
      }
    }
  },
  plugins: [],
}
