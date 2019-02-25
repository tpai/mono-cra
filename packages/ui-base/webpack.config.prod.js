const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  mode: 'production',
  output: {
    filename: 'ui-base.js',
    library: {
      root: 'uiBase',
      commonjs: 'ui-base',
      amd: 'ui-base',
    },
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      amd: 'react',
      commonjs: 'react',
    },
  },
});
