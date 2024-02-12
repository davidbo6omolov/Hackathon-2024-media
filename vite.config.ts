import { defineConfig } from 'vite'
// @ts-expect-error: Unreachable code error
import tailwindcss from 'vite-plugin-tailwindcss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
