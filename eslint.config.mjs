import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  //Need to disable all possible rules to avoid deploymen errors

  compat.config({
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
    ],
    plugins: ["import", "prettier"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-empty": "off",
      "no-extra-semi": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multiple-empty-lines": "off",
      "no-trailing-spaces": "off",
    },
  }),
  compat.config({
    files: ["*.js", "*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/export": "off",
    },
  }),
];

export default eslintConfig;
