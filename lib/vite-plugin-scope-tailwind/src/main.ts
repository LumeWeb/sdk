import { Plugin } from "vite"
import path from "path"
import * as fs from "node:fs"
import { AcceptedPlugin } from "postcss"
import uniqid from "uniqid"

import { getPostCssConfig, postCssPluginsToArray } from "./get-postcss-config"
import { prefixPlugin } from "./postcss/prefix-tailwind"
import { appendClass, appendClassForReact } from "./append-classes"

const id = uniqid("d")

/**
 * @param {object} options - The options for the plugin.
 * @param {boolean} options.react - If true, the plugin will be configured for React.
 * @param {RegExp | RegExp[]} options.ignore - Regular expressions to ignore.
 * @param {string[]} options.classNameTransformers - Functions used inside `className` that return a string.
 * @returns {Plugin} - The configured plugin.
 */
const plugin = ({
  react = false,
  classNameTransformers = [],
  ignore = []
}: {
  react?: boolean
  ignore?: RegExp | RegExp[]
  classNameTransformers?: string[]
} = {}): Plugin => ({
  name: "vite-plugin-scope-tailwind",
  config: async (config) => {
    let currentPostCssPlugins: AcceptedPlugin[] = [] as AcceptedPlugin[]
    if (
      typeof config.css !== "undefined" &&
      typeof config.css.postcss !== "string" &&
      typeof config.css.postcss !== "undefined"
    ) {
      currentPostCssPlugins =
        config.css.postcss.plugins ?? currentPostCssPlugins
    }

    const postCssConfigFile = await getPostCssConfig()

    return {
      css: {
        postcss: {
          plugins: [
            ...currentPostCssPlugins,
            ...(
              await Promise.all(
                postCssPluginsToArray(postCssConfigFile).map(loadPackage)
              )
            ).map((r) => r.default),
            prefixPlugin({ prefix: `${id}.`, ignore })
          ]
        }
      }
    }
  },
  transform: react ? appendClassForReact(id, classNameTransformers) : appendClass(id)
})

async function loadPackage(pack: string) {
  const packageJsonPath = path.join(
    process.cwd(),
    "node_modules",
    pack,
    "package.json"
  )
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
  const mainEntry = packageJson.main

  return await import(path.join(process.cwd(), "node_modules", pack, mainEntry))
}

export default plugin
