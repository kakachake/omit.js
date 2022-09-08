export default {
  entry: ["src/index.ts"],
  cjs: "babel",
  esm: { type: "babel", importLibToEs: true },
  doc: { base: "/switch" },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
