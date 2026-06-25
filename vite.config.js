import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => ({
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    entries: ['index.html'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
}))



