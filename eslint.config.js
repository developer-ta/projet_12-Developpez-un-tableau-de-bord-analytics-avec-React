import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import Prettier from "eslint-plugin-prettier";
import jsdoc from "eslint-plugin-jsdoc";


export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      plugin: Prettier / recommended,
      jsdoc,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...Prettier.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "jsdoc/check-alignment": "warn", // Vérifie l'alignement des astérisques dans les blocs JSDoc
      "jsdoc/check-param-names": "warn", // Vérifie que les noms des paramètres correspondent
      "jsdoc/require-param": "warn", // Oblige à documenter tous les paramètres
      "jsdoc/require-returns": "warn", // Oblige à documenter les retours
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: false, // Facultatif pour les fonctions fléchées
            FunctionExpression: false,
          },
        },
      ],
    },
  },
];
