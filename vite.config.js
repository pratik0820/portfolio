import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path. Update this ONLY if you name your repository
// something other than "portfolio".
// e.g. repo "pratik-gole"  ->  base: '/pratik-gole/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
