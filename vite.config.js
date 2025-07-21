import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace this with your repo name
const repoName = 'Portfolio'

export default defineConfig({
  base: `/${repoName}/`, // Set the base path for your project
  plugins: [react()],
})