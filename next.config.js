const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const MDX = require('@next/mdx')
const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const images = require("remark-images")
const emoji = require("remark-emoji")


let getEnv = () => {
    return {}
}

let webpack = (config, options) => {
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        }
    })
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    return config
}

let config = {
    env: {},
    cssModules: false,
    webpack,
    webpackDevMiddleware: null,
    distDir: 'build',
    assetPrefix: '',
    configOrigin: 'default',
    useFileSystemPublicRoutes: true,
    generateEtags: true,
    pageExtensions: ['jsx', 'js', 'mdx', 'md'],
    target: "server",
    poweredByHeader: false,
    compress: true,
    devIndicators: {
        buildActivity: true,
        autoPrerender: false
    },
    onDemandEntries: {
        maxInactiveAge: 60000,
        pagesBufferLength: 2
    },
    amp: {
        canonicalBase: ''
    },
    exportTrailingSlash: false,
    future: {
        excludeDefaultMomentLocales: false
    },
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
    reactStrictMode: true // false
}

let withMDX = MDX({
    extension: /\.(md|mdx)$/,
    remarkPlugins: [images, emoji]
})

module.exports = withCSS(withSass(withMDX(config)))