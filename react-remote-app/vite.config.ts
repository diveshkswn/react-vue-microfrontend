import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';


// https://vite.dev/config/
export default defineConfig({

  server : {
    port : 3001,
  },
  preview : {
    port : 3001,  //preview mode port
  },
  plugins: [react(),federation({
    name : "remote_react",
    filename: 'remoteEntry.js',
    exposes : {
      "./ReactCounter" : "./src/components/Counter/Counter.tsx",  //Single component expose
      "./reactComponents" : "./src/components/index.ts"  //full index expose
    },
    shared: ['react', 'react-dom'],

  })],
})
