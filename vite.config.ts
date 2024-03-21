import { defineConfig, splitVendorChunkPlugin, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), TanStackRouterVite()],
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === "SOURCEMAP_ERROR") {
          return;
        }

        defaultHandler(warning);
      },
      output: {
        manualChunks: (id) => {
          if (id.indexOf("pdfjs-dist") >= 0) {
            return "pdfjs-dist";
          } else if (id.indexOf("framer-motion") >= 0) {
            return "frame-motion";
          } else if (id.indexOf("date-fns") >= 0) {
            return "date-fns";
          } else if (id.indexOf("react-github-calendar") >= 0) {
            return "react-github-calendar";
          } else if (id.indexOf("react-icons") >= 0) {
            return "react-icons";
          } else if (id.indexOf("node_modules") >= 0) {
            return "vendor";
          } else {
            return "index";
          }
        },
      },
    },
  },
});
