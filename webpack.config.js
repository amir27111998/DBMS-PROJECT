const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.(scss|css)$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name:'[name].[ext]',
            outputPath:'/img'
          },
        },
      ],
    },
    {
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name:'[name].[ext]',
            outputPath:'/prescriptions'
          },
        },
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
       use: ['url-loader?limit=100000'] 
    }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
