import Typography from 'typography'
import theme from 'typography-theme-github'

theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

const typography = new Typography(theme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
