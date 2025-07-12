import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
//@ts-expect-error No types for process
const mode = process.env.NODE_ENV || "development"; // fallback to 'development'
//@ts-expect-error No types for process
const env = loadEnv(mode, process.cwd(), "");
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "react_host",
      remotes: {
        remote_react:`${env.VITE_REMOTE_REACT_URL||"http://localhost:3001"}/assets/remoteEntry.js`,
        remote_vue:`${env.VITE_REMOTE_VUE_URL||"http://localhost:3001"}/assets/remoteEntry.js`
      },
      shared: ["react", "react-dom","vue"],
    }),
  ],
});
