import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import scopeTailwind from "vite-plugin-scope-tailwind";
import { resolve } from 'path'
// import reactTailwindClassnamePrefixer from "./lib/vite-plugin-react-classname-prefixer";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), scopeTailwind({react: true})],
  resolve: {
    // I have no clue why aliases are not working at all...
    alias: {
      '@styles/': resolve(__dirname, './styles'),
      '@components/': resolve(__dirname, './src/components'),
      '@assets/': resolve(__dirname, './src/assets'),
      '@': resolve(__dirname, './src'),
    },
  },
})
