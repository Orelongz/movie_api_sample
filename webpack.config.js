const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './public/app.js',
  output: {
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};
