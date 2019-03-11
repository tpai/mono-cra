const path = require('path');

module.exports = {
  webpack: (config, env) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      'assets': path.resolve(__dirname, './src/assets'),
  jest: (config) => {
    config.moduleDirectories = [
      'node_modules',
      'src',
    ];
    config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
      '^.+\\.(|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    });
    config.coverageReporters = [
      'json',
      'html',
      'text',
    ];
    return config;
  },
};
