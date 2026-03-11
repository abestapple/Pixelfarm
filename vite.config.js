import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 启用最新的 Tailwind 插件
  ],
  build: {
    // 强制不分离 CSS，全部打包进一个文件
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // 强制把所有 JS 代码打包进唯一的文件
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})