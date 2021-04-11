module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [__dirname + '/src/styles/variables/media.css']
    },
    'postcss-pxtorem': {
      propList: ['*'],
      mediaQuery: true
    },
    'postcss-color-converter': {
      outputColorFormat: 'hex'
    },
    'postcss-csso': {}
  }
};
