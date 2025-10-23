import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,html}"],
    plugins: { js,html },
    extends: ["js/recommended","html/recommended"],
    language: "html/html",
    rules: {
            "html/no-duplicate-class": "error",
    },
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
]);
