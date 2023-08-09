const miniCssExtract = require('mini-css-extract-plugin') 

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [miniCssExtract.loader, 'css-loader']
    }]
  },
  plugins: [
    new miniCssExtract()
  ]

}