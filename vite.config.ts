import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPath from "vite-tsconfig-paths";
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPath(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          }
        },
      ]
    })
  ],
  base: "./",
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '../../vitest.setup.ts', // from the perspective of each sub project
  }
});
