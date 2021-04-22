import React from 'react'
import tw from 'twin.macro'
import { ThemeContext } from '../context/themeContext'
import { AiFillFire } from 'react-icons/ai'

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isDark(): boolean {
    return theme === 'dark'
  }

  const ToggleTheme = () => {
    if (setTheme !== undefined) {
      setTheme(isDark() ? 'light' : 'dark')
    }
  }

  return (
    <>
      <button
        aria-label={isDark() ? 'Activate Light Mode' : 'Activate Dark Mode'}
        title={isDark() ? 'Activate Light Mode' : 'Activate Dark Mode'}
        onClick={ToggleTheme}
        tw="bg-nonw bg-transparent border-none outline-none"
      >
        <AiFillFire tw="w-6 h-6" />
      </button>
    </>
  )
}

export default ThemeToggle
