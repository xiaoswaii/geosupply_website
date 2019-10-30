const SitemapPlugin = require('sitemap-webpack-plugin').default
const routerPaths = ['/','/Project','/Product','/Software','/Aboutus','/Contactus']

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://www.geosupply.com.tw', routerPaths, {
        fileName: 'sitemap.xml',
      })
    ]
  }
}
