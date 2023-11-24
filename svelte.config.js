import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
// import static_adapter from '@sveltejs/adapter-static';
import adapter from "@sveltejs/adapter-static";
import md from "mdsvex";
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    vite: { 
      ssr: { 
        noExternal: ["pdfjs-dist", "pdfjs-dist/build/pdf.worker.min.mjs?v=22fd2197"]
      },
      build: {
        "module": "esnext",
        "target": "ESNext",
        "moduleResolution": "Node",
      }
    }
  },

  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
