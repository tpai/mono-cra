const path = require('path');

module.exports = function configOverrides(config, env) {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    'assets': path.resolve(__dirname, './src/assets'),
  });
  return config;
};
