import reactPlugin from 'eslint-plugin-react';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...tsPlugin.configs?.rules,
      ...reactPlugin.configs?.rules,
      ...eslintPluginPrettier.configs?.rules,
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto', importOrder: ['react', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'] },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
