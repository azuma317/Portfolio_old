import React from 'react'
import { css } from '@emotion/core'

const NotFoundPage: React.FC<unknown> = () => (
  <div css={styles.not_found}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage

const styles = {
  not_found: css`
    text-align: center;
  `,
}
