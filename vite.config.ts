import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
dotenv.config()

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${process.env.REPONAME}/` || '/portfolio/',
  server: {
    port: parseInt(process.env.PORT ?? '3000', 10),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
