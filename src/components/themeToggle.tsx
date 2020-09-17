import React from 'react'
import { css } from '@emotion/core'
import { ThemeContext } from '../context/themeContext'
import { AiFillFire } from 'react-icons/ai'

const ThemeToggle = () => {
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
      transition-duration: 1s;
      transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform;
    }
  `,
}
