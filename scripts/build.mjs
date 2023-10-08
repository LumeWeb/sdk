#!/usr/bin/env zx
import "zx/globals"

const buildCmd = $`pnpm run build-pkg`

const ogPackageJson = JSON.parse(await fs.readFile(path.resolve(process.cwd(), 'package.json'), "utf-8"))
const externals = ['react', 'react-dom']
const externalOnOgPackageJsonDeps = Object.keys(ogPackageJson.dependencies)
  .filter((d) => externals.includes(d))
  .reduce((acc, dK) => ({ ...acc, [dK]: ogPackageJson.dependencies[dK] }), {})

const packageJson = {
  name: "@lume-sdk/components",
  version: ogPackageJson.version,
  main: "./lib.umd.js",
  module: "./lib.es.js",
  types: "./src/main.d.ts",
  files: ["./src", "./style.css"],
  peerDependencies: externalOnOgPackageJsonDeps
}

await buildCmd
await $`echo ${JSON.stringify(packageJson)} > ./dist/package.json`
