import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
            },
            globals: {
                ...globals.node,
                ...globals.es2020,
            }
        },
    }
]