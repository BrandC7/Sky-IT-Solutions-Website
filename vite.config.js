import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Next lines can be adapt for the deployment between Docker and Github.
  // base: "/Sky-IT-Solutions-Website/",
  //  preview: {
  //    port: 3000,
  //    strictPort: true,
  //  },
  //  server: {
  //    port: 3000,
  //    strictPort: true,
  //    host: true,
  //    origin: "http://localhost:3000",  
  //  },
});
