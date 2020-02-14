module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  assetsDir: '',
  productionSourceMap: false,
	filenameHashing: true,
	pages: {
    'index': {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'modals': {
      entry: './src/pages/modals/main.js',
      template: 'public/index.html',
      title: 'Modals',
      chunks: [ 'chunk-vendors', 'chunk-common', 'modals' ]
    
    },
    'auth': {
      entry: './src/pages/auth/main.js',
      template: 'public/index.html',
      title: 'Auth',
      chunks: [ 'chunk-vendors', 'chunk-common', 'auth' ]
    }
  }
}
