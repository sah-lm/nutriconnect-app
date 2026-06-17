import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nutriconnect-app/', // IMPORTANTE: Coloque o nome exato do seu repositório aqui entre as barras
})

