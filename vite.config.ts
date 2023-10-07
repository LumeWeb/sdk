import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import scopeTailwind from "vite-plugin-scope-tailwind";
// import { resolve } from 'path'
import svgr from "vite-plugin-svgr";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), scopeTailwind({react: true}), dts({
    tsconfigPath: "tsconfig.build.json"
  })],
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
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
})
