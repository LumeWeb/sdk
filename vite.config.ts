import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scopeTailwind from "vite-plugin-scope-tailwind";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import optimizer from "vite-plugin-optimizer";
import noBundlePlugin from "vite-plugin-no-bundle";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    scopeTailwind({ react: true }),
    dts({
      tsconfigPath: "tsconfig.build.json",
    }),
    optimizer({
      "node-fetch":
        "const e = undefined; export default e;export {e as Response, e as FormData, e as Blob};",
    }),
    noBundlePlugin(),
  ],
  resolve: {
    dedupe: ["@lumeweb/libportal", "@lumeweb/libweb", "@lumeweb/libkernel"],
    // TODO: For some reason aliases are not working....
    // alias: {
    //   '@styles/': resolve(__dirname, './styles'),
    //   '@components/': resolve(__dirname, './src/components'),
    //   '@assets/': resolve(__dirname, './src/assets'),
    //   '@': resolve(__dirname, './src'),
    // },
  },
  build: {
    manifest: false,
    outDir: "lib",
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sdk",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
      external: ["react", "react-dom"],
    },
  },
});
