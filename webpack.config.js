const { join } = require('path')

const include = join(__dirname, 'src')

module.exports = {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'mellotron'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include }
    ]
  }
}
