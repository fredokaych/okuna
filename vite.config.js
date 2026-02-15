import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/configuration/
export default defineConfig({
  plugins: [react()],
  base: 'https://fredokaych.github.io/okuna/',
})
