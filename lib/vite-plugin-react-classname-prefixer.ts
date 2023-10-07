import { Plugin } from "vite"

const reactTailwindClassnamePrefixer = ({
  prefix: outerPrefix
}: {prefix: string}) => ({
  name: "react-tailwind-classname-prefixer",
  transform(code, id) {
    if (!/\.tsx?$/.test(id)) return
    const prefix = outerPrefix;

    const classNameRegex = /className:\s*"([^"]*)"/g
    const prefixedCode = code.replace(classNameRegex, (match, classNames) => {
      const prefixedClassNames = classNames
        .split(" ")
        .map((className) => `${prefix}${className}`)
        .join(" ")
      return `className: "${prefixedClassNames}"`
    })

    return {
      code: prefixedCode,
      map: null
    }
  }
}) as Plugin

export default reactTailwindClassnamePrefixer
