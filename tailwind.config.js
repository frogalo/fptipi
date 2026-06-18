/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d12',
        ink2: '#0f1219',
        panel: '#14181f',
        panel2: '#181d26',
        line: '#262d39',
        txt: '#e9e7df',
        muted: '#8b91a0',
        amber: {
          DEFAULT: '#f4a52a',
          soft: '#ffc36b',
        },
        green: {
          DEFAULT: '#5be39a',
          dim: '#2f7d57',
        },
        red: '#ff6f6f',
        blue: '#7fb4ff',
      },
      fontFamily: {
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
