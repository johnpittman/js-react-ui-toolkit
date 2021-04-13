module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--screen-xs': '(min-width: 640px)',
            '--screen-xs-max': '(max-width: 767px)',
            '--screen-sm': '(min-width: 768px)',
            '--screen-sm-max': '(max-width: 1023px)',
            '--screen-md': '(min-width: 1024px)',
            '--screen-md-max': '(max-width: 1279px)',
            '--screen-lg': '(min-width: 1280px)',
            '--screen-lg-max': '(max-width: 1535px)',
            '--screen-xl': '(min-width: 1536px)'
          }
        }
      ]
    },
    // Optimization
    // 'postcss-short-css-vars': {}, // Application build only. Does not work with nesting yet. 04/10/2021
    'postcss-pxtorem': {
      // propList: ['*']
      // mediaQuery: true
    },
    'postcss-color-converter': {
      outputColorFormat: 'hex'
    },
    'postcss-csso': {
      forceMediaMerge: true
    }
  }
};
