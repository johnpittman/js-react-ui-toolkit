const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const { ESBuildMinifyPlugin } = require('esbuild-loader');

// function useEsbuildMinify(config, options) {
//   const terserIndex = config.optimization.minimizer.findIndex(
//     (minimizer) => minimizer.constructor.name === 'TerserPlugin'
//   );
//   if (terserIndex > -1) {
//     config.optimization.minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options));
//   }
// }

// function useEsbuildLoader(config, options) {
//   const tsLoader = config.module.rules.find((rule) => rule.test && rule.test.test('.ts'));

//   if (tsLoader) {
//     tsLoader.use.loader = 'esbuild-loader';
//     tsLoader.use.options = { ...options, loader: 'ts' };
//   }

//   const tsxLoader = config.module.rules.find((rule) => rule.test && rule.test.test('.tsx'));

//   if (tsxLoader) {
//     tsxLoader.use.loader = 'esbuild-loader';
//     tsxLoader.use.options = { ...options, loader: 'tsx' };
//   }

//   const jsLoader = config.module.rules.find((rule) => rule.test && rule.test.test('.js'));

//   if (jsLoader) {
//     jsLoader.use.loader = 'esbuild-loader';
//     jsLoader.use.options = { ...options, loader: 'js' };
//   }

//   const jsxLoader = config.module.rules.find((rule) => rule.test && rule.test.test('.jsx'));

//   if (jsxLoader) {
//     jsxLoader.use.loader = 'esbuild-loader';
//     jsxLoader.use.options = { ...options, loader: 'jsx' };
//   }
// }

module.exports = ({ config }) => {
  const rules = config.module.rules;

  // Use custom css rules
  const cssLoaderRule = rules.find((rule) => rule.test.test('.css'));
  cssLoaderRule.exclude = /\.module\.css$/;

  // Add loaders to proccess CSS modules
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  });

  // Use custom svg rules
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  // Use svgr for svg files
  config.module.rules.push({
    issuer: /\.(js|ts)x$/,
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
            icon: true
          }
        }
      }
    ]
  });

  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      logLevel: 'INFO',
      baseUrl: path.resolve(__dirname, '../'),
      mainFields: ['browser', 'main']
    })
  );

  // useEsbuildMinify(config, {
  //   target: 'es2015' // Syntax to compile to (see options below for possible values)
  // });

  // useEsbuildLoader(config, {
  //   target: 'es2015'
  // });

  return config;
};
