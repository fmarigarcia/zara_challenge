const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@components/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

export default config;
