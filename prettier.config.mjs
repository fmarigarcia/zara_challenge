const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  singleQuote: true,
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

export default config;
