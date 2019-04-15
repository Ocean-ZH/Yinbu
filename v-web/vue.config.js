// vue.config.js
const webpack = require("webpack");

module.exports = {
    publicPath:"/Yinbu/v-web/dist",
    devServer: {
        open: true,
        port: 8081,
    }, 
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
}