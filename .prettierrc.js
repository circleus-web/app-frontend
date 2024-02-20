module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@angular/(.*)$', '<THIRD_PARTY_MODULES>', '^../(.*)$', '^./(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['decorators', 'typescript'],
};
