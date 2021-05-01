module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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

      accent: '#2b6cb0',
      primary: '#2d3748',
      secondary: '#4a5568',
      tertiary: '#4a5568',

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
