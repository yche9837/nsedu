/**
 * ESLint Configuration File (.mjs)
 * 
 * ESLint is a code quality tool that finds and fixes problems in JavaScript/TypeScript.
 * This file configures ESLint rules for your Next.js project.
 * 
 * The .mjs extension means this is an ES Module file that uses
 * modern import/export syntax instead of CommonJS require/module.exports.
 */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
