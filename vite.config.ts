import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scopeTailwind from "vite-plugin-scope-tailwind";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import optimizer from "vite-plugin-optimizer";
// import css from 'rollup-plugin-css-only'

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
    nodePolyfills({
      exclude: ["fs"],
      globals: { Buffer: true, global: true, process: true },
    }),
    // css({ output: 'styles/globals.css' })
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
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
