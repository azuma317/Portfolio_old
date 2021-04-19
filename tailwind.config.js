module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'Georgia', 'serif'],
    },
    colors: {
      'bg-accent': '#63b3ed',
      'bg-primary': '#ffffff',
      'bg-secondary': '#edf2f7',
      'bg-accent-hover': '#4299e1',

      'text-accent': '#2b6cb0',
      'text-primary': '#2d3748',
      'text-secondary': '#4a5568',
      'text-tertiary': '#4a5568',
      'text-on-accent': '#f7fafc',

      'fill-primary': '#b1d9f6',
      'fill-secondary': '#edf2f7',

      'gradient-accent1': 'rgba(49, 130, 206, 1)',
      'gradient-accent2': 'rgba(79, 209, 197, 1)',

      'code-background': '#edf2f7',
      'code-text': '#2d3748',
      'code-comment': '#718096',
      'code-punctuation': '#39adb5',
      'code-const': '#7c4dff',
      'code-bool': '#7c4dff',
      'code-string': '#f6a434',
      'code-var': '#e53935',
      'code-func': '#3d5afe',
      'code-keyword': '#7c4dff',
      'code-regex': '#6182b8',
    },
    extend: {},
  },
}
