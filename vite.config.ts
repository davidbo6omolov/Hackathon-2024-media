import { defineConfig } from 'vite'
import tailwindcss from 'vite-plugin-tailwindcss';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react(),tailwindcss()],
})
