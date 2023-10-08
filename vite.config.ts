import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import scopeTailwind from "./lib/vite-plugin-scope-tailwind/src/main"
import { resolve } from "path"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"
// import css from 'rollup-plugin-css-only'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    scopeTailwind({ react: true, classNameTransformers: ["cn"] }),
    dts({
      tsconfigPath: "tsconfig.build.json"
    }),
    // css({ output: 'styles/globals.css' })
  ],
  resolve: {
    // TODO: For some reason aliases are not working....
    // alias: {
    //   '@styles/': resolve(__dirname, './styles'),
    //   '@components/': resolve(__dirname, './src/components'),
    //   '@assets/': resolve(__dirname, './src/assets'),
    //   '@': resolve(__dirname, './src'),
    // },
  },
  build: {
    manifest: true,
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "lume-sdk",
      fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        // "framer-motion",
        // "tailwind-merge",
        // "class-variance-authority"
      ]
    }
  }
})
