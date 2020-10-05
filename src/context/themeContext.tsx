import React from 'react'

type Props = {
  initialTheme?: string
}

const getInitialTheme: () => string = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) {
      return 'light'
    }
  }
  return 'light'
}

interface ContextProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext<Partial<ContextProps>>({})

const ThemeProvider: React.FC<Props> = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
