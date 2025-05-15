require('dotenv').config();
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    user: './simulations/user.test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].test.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
          },
        },
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  target: 'webworker',
  externals: {
    'k6': 'k6',
    'k6/http': 'k6/http',
  },
};
