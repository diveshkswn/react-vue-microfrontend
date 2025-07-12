import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server : {
    port : 3002,
  },
  preview : {
    port : 3002,  //preview mode port
  },
  plugins: [vue(),federation({
    name : "remote_vue",
    filename: 'remoteEntry.js',
    exposes : {
      "./vueComponents" : "./src/components/index.ts"  //full index expose
    },
    shared: ['vue'],

  })],
})
