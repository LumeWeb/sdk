import path from "path";
import { AcceptedPlugin } from "postcss";

export const getPostCssConfig = async (): Promise<any | undefined> => {
  try {
    const {default: file} = await import(path.join(process.cwd(), "postcss.config.js"));

    return file;
  } catch {}

  try {
    const {default: file} = await import(path.join(process.cwd(), "postcss.config.cjs"));

    return file;
  } catch {}

  try {
    const {default: file} = await import(path.join(process.cwd(), "postcss.config.json"));

    return file;
  } catch {}

  try {
    const {default: file} = await import(path.join(process.cwd(), "postcss.config.ts"));

    return file;
  } catch {}

  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
};

export const postCssPluginsToArray = (config: { plugins: AcceptedPlugin[] }): string[] => {
  return Object.keys(config.plugins);
};
