module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  module: {
    rule: [{
      test: /\.css$/,
      use: ['css-loader', 'style-loader']
    }]
  }

}