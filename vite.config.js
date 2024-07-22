import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// For github pages deployment uncomment the next line.
base: "/Sky-IT-Solutions-Website/",
});
