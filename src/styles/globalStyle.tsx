import React from 'react'
import { Global, css } from '@emotion/core'

const styles = css``

const GlobalStyle: React.FC = () => {
  return <Global styles={styles} />
}

export default GlobalStyle
