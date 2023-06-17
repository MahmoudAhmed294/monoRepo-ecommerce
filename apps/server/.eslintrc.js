module.exports = {
  ...require('config/eslint-server.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
