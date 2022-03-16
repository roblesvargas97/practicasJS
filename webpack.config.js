const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
 resolve: {
    extensions: ['.js' , '.jsx'],
},
  // webpack 5 comes with devServer which loads in development mode
devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081,
    historyApiFallback: true,
},
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader' , 'postcss-loader']
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}