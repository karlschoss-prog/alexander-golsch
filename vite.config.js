import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alexander-golsch/',
  build: {
    outDir: 'docs',
  },
})
