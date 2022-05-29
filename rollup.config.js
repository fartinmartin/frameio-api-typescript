// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "FrameIOClient",
  },
  external: ["axios"],
  plugins: [typescript()],
};
