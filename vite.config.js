import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// VITE_BASE_PATH is set by CI for branch preview deployments.
// For production (main branch) and local dev it defaults to '/'.
const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base,
})
