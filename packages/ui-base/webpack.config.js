const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
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
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', 'scss', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]-[local]-[hash:6]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({
                  path: [path.resolve(__dirname, 'src')],
                }),
                require('postcss-import')({
                  browsers: 'last 2 versions, ie > 9',
                }),
                require('cssnano')(),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
