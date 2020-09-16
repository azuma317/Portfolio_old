import React from 'react'
import { css } from '@emotion/core'
import { ThemeContext } from '../context/themeContext'

type Props = {
  className: string
}

const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isLight(): boolean {
    return theme === 'light'
  }

  const ToggleTheme = () => {
    if (setTheme !== undefined) {
      setTheme(isLight() ? 'dark' : 'light')
    }
  }

  return (
    <>
      <button
        aria-label={isLight() ? 'Activate Dark Mode' : 'Activate Light Mode'}
        title={isLight() ? 'Activate Dark Mode' : 'Activate Light Mode'}
        onClick={ToggleTheme}
      ></button>
    </>
  )
}
