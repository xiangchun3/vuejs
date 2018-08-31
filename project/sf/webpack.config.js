const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
// vue-loader 15.x后的版本，必须引入vueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// https://github.com/jaywcjlove/webpack-api-mocker
const apiMocker = require('webpack-api-mocker');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 10KB以下的的图片转成BASE64格式
              limit: 1024 * 10
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [{
              loader: "url-loader",
              options: {
                  limit: 1024 * 5,
                  name: 'fonts/[name].[hash:7].[ext]'
              }
          }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      inject: true,
      title: 'main',
      filename: 'index.html',
      template: './index.html'
    })
  ],
  resolve: {
    // 配置以下类型文件可缩写后缀
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    port: config.dev.port,
    contentBase: './dist',
    historyApiFallback: true,// 如果为 true ，页面出错不会弹出 404 页面
    before: function (app) {
        // 拦截接口请求到本地mock文件，仅在本地服务调试时有效果，不影响上线配置
        apiMocker(app, path.resolve(__dirname, './src/mock/index.js'));
    },
  }
}