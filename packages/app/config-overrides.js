const path = require('path');

module.exports = function configOverrides(config, env) {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    'assets': path.resolve(__dirname, './src/assets'),
  });
  // remove eslint check from create-react-app
  const moduleRules = config.module.rules;
  config.module.rules = moduleRules.slice(0, 1).concat(moduleRules.slice(2, moduleRules.length));
  return config;
};
