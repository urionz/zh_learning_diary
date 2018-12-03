const path = require('path')
const querystring = require('querystring')
const resolve = dir => path.join(__dirname, dir)

const pages = {}

// 配置读取
const pageConf = (process.env.VUE_APP_MULTI_PAGES_CONF).split('|')
pageConf.forEach(conf => {
    conf = querystring.parse(conf)
    pages[conf.index] = {
        title: conf.title,
        entry: `src/pages/${conf.index}/main.js`,
        template: 'public/index.html',
        filename: `${conf.index}/index.html`,
        chunks: ['chunk-vendors', 'chunk-common', conf.index]
    }
})

// 目录读取模式
// const fs = require('fs')
// const pagesRoot = resolve('src/pages')
// const pagesDir = fs.readdirSync(pagesRoot)
// pagesDir.forEach(dirName => {
//     pages[dirName] = {
//         title: dirName,
//         entry: `src/pages/${dirName}/main.js`,
//         template: 'public/index.html',
//         filename: 'index.html',
//         chunks: ['chunk-vendors', 'chunk-common', dirName]
//     }
// })

module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    parallel: require('os').cpus().length > 1,
    productionSourceMap: true,
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    },
    pages
}
