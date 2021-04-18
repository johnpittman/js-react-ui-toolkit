const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

function useEsbuildMinify(config, options) {
  config.optimization.minimizer = [new ESBuildMinifyPlugin(options)];
}

function useEsbuildLoader(config, options) {
  const tsLoader = config.module.rules.find(
    (rule) =>
      !Array.isArray(rule.test) &&
      (rule.test.test('.ts') || rule.test.test('.tsx') || rule.test.test('.js') || rule.test.test('.jsx'))
  );

  if (tsLoader) {
    tsLoader.use.loader = 'esbuild-loader';
    tsLoader.use.options = {
      ...options,
      loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.js': 'js',
        '.jsx': 'jsx'
      }
    };
  }
}

module.exports = ({ config }) => {
  // Use custom css rules
  const cssLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.css'));
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
            localIdentName: process.env.NODE_ENV === 'production'
            ? '[hash:base64]'
            : '[name]__[local]--[hash:base64:5]'
          }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.js')
          }
        }
      }
    ]
  });

  // Use custom svg rules
  const fileLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.svg'));
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

  useEsbuildMinify(config, {
    target: 'es2015', // Syntax to compile to (see options below for possible values)
    css: true,
    sourcemap: true
  });

  useEsbuildLoader(config, {
    target: 'es2015'
  });

  return config;
};
