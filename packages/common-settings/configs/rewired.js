module.exports = function override(config, env) {
  config.resolve = {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', 'scss', 'css'],
  };
  return config;
}
