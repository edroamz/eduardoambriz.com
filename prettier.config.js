/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  plugins: [require('prettier-plugin-tailwindcss')]
};
