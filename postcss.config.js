module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: __dirname + '/src/styles/variables/media.css'
    },
    // TODO: remove after demo
    // demo of css after minify. specifically merging media
    'postcss-pxtorem': {
      propList: ['*'],
      mediaQuery: true
    },
    'postcss-csso': {}
  }
};
