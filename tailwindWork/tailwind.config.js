/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
        Nick1:{
          100:'#7C93C3',
          200:'#55679C',
          300:'#1E2A5E',
          400:'#E1D7B7',
        }
      },
      backgroundColor:{
        Nickbg:{
          400:'#402E7A',
          300:'#4C3BCF',
          200:'#4B70F5',
          100:'#3DC2EC'
        }
      },
    },
  },
  plugins: [],
}

