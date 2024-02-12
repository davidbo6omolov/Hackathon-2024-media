import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-expect-error - I don't know why this is happening
  plugins: [react(),tailwindcss()],
})
