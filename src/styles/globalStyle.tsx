import React from 'react'
import { Global, css } from '@emotion/core'

const styles = css`
  :root {
    @apply light;
  }
  .light {
    --color-bg-accent: #63b3ed;
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #edf2f7;
    --color-bg-accent-hover: #4299e1;

    --color-text-accent: #2b6cb0;
    --color-text-primary: #2d3748;
    --color-text-secondary: #4a5568;
    --color-text-tertiary: #4a5568;
    --color-text-on-accent: #f7fafc;

    --color-fill-primary: #b1d9f6;
    --color-fill-secondary: #edf2f7;

    --color-gradient-accent1: rgba(49, 130, 206, 1);
    --color-gradient-accent2: rgba(79, 209, 197, 1);

    --color-code-background: #edf2f7;
    --color-code-text: #2d3748;
    --color-code-comment: #718096;
    --color-code-punctuation: #39adb5;
    --color-code-const: #7c4dff;
    --color-code-bool: #7c4dff;
    --color-code-string: #f6a434;
    --color-code-var: #e53935;
    --color-code-func: #3d5afe;
    --color-code-keyword: #7c4dff;
    --color-code-regex: #6182b8;
  }
  .dark {
    --color-bg-accent: #81e6d9;
    --color-bg-primary: #1a202c;
    --color-bg-secondary: #161b25;
    --color-bg-accent-hover: #4fd1c5;

    --color-text-accent: #81e6d9;
    --color-text-primary: #f7fafc;
    --color-text-secondary: #e2e8f0;
    --color-text-tertiary: #a0aec0;
    --color-text-on-accent: #1a202c;

    --color-fill-primary: #81e6d9;
    --color-fill-secondary: #161b25;

    --color-gradient-accent1: rgba(49, 130, 206, 1);
    --color-gradient-accent2: rgba(79, 209, 197, 1);

    --color-code-background: #161b25;
    --color-code-text: #edf2f7;
    --color-code-comment: #718096;
    --color-code-punctuation: #edf2f7;
    --color-code-const: #ff79c6;
    --color-code-bool: #bd93f9;
    --color-code-string: #50fa7b;
    --color-code-var: #f8f8f2;
    --color-code-func: #f1fa8c;
    --color-code-keyword: #8be9fd;
    --color-code-regex: #ffb86c;
  }
  body {
    // transition: all 300ms ease 0s;
    overflow-x: hidden;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
  a {
    color: var(--color-text-accent);
  }
`

const GlobalStyle: React.FC = () => {
  return <Global styles={styles} />
}

export default GlobalStyle