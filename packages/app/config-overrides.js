const path = require('path');
const resolvedPaths = require('./resolved-paths');

module.exports = {
  webpack: (config, env) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, resolvedPaths);
    return config;
  },
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
