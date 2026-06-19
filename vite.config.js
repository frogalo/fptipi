import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  root: 'src',
  base: mode === 'production' ? '/fptipi/' : '/',
  plugins: [
    react({
      babel: {
        generatorOpts: {
          compact: true
        }
      }
    }),
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
}))

