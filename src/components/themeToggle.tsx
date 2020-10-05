import React from 'react'
import { css } from '@emotion/core'
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
        css={styles.button}
      >
        <AiFillFire />
      </button>
    </>
  )
}

export default ThemeToggle

const styles = {
  button: css`
    background: transparent;
    background-color: transparent;
    background-image: none;
    border: none;
    outline: none;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--color-text-secondary);
    }
  `,
}
