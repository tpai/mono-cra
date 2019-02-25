const webpackConfig = require('./webpack.config');

module.exports = {
  sections: [
    {
      name:       'Components',
      components: './src/components/**/index.jsx',
    },
  ],
  webpackConfig,
  exampleMode:    'expand',
  usageMode:      'expand',
  pagePerSection: true,
};
