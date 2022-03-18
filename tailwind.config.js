module.exports = {
  content: ["./src/**/*.{html,js,jsx}" , "./public/index.html"],
  theme: {
    extend: {
      keyframes:{
        entry:{
          '0%':{opacity: '0',transform: 'scale(.2)'},
          '100%':{opacity: '1',transform: 'scale(1)'}
        },
        exit:{
          '0%':{opacity: '1',transform: 'scale(1)'},
          '100%':{opacity: '0',transform: 'scale(.2)'}
        },
      },
      animation:{
        'entry': 'entry ease-in-out 1s',
        'exit': 'exit ease-in-out 1s forwards '
      }
    },
    fontFamily:{
      'Josefin': ['Josefin Sans', 'sans-serif']
    }
  },
  plugins: [],
}