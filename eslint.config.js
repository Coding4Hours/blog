import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import oxlint from "eslint-plugin-oxlint";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...oxlint.configs['flat/recommended'],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
  },
  { rules: { "no-console": "error" } },
  { ignores: ["dist/**", ".astro/**", "public/pagefind/**"] },
];
