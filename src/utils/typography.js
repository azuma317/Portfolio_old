import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Merriweather', 'Georgia', 'serif'],
  bodyFontFamily: ['Merriweather', 'Georgia', 'serif'],
})

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
