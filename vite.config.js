import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [
    vuePlugin(),
  ],
  build: {
    minify: false,
  },
}))
