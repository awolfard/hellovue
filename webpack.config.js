var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: __dirname +"/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  }
};