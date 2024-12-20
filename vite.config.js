import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  base: './',
  plugins: [react(), eslint()],
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "zeroConfig": true }
    },
  ],
})
