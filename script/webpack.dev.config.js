'use strict'

const config = require('./webpack.base.config')
const webpack = require('webpack')
const path = require('path')

config.cache = true
config.devtool = 'inline-eval-source-map'

config.devServer = {
    port: 9091,
    proxy: {
        //'http://localhost:4000/': {
        //    target: 'http://localhost:8888',
        //    secure: false
        //    // rewrite: function (req) {
        //        // req.url = req.url.replace(/^\/api/, '')
        //    // }
        //}
    }
}

module.exports = config

