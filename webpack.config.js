const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map', // ソースマップを作成する
  entry:  './src/index.js', // webpackが最初にエントリーするファイル名
  output: {
    filename: 'main.js', // 出力されるファイル名
    path: path.resolve(__dirname, 'dist') // 出力されるディレクトリ
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 拡張子がjsであり、
        exclude: /(node_modules)/, // それがnode_moduleディレクトリの外のファイルであれば、
        use: {
          loader: 'babel-loader' // Babelを実行する
        }
      }
    ]
  }
};