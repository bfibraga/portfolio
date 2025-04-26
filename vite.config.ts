import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
dotenv.config()

export default defineConfig({
  plugins: [react()],
  base: `/${process.env.REPONAME}/` || '/portfolio/'
})
