import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      mode: ['html']
    }),
    MarkdownPreview()
  ]
})
