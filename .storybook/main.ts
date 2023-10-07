import type { StorybookConfig } from "@storybook/react-vite"
import { resolve } from "node:path"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config) { 
    
    console.log('[vitefinal]', JSON.stringify(config, null, 2))

    return config
  }
}
export default config
