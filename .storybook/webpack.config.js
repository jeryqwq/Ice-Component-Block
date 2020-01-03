const path = require('path');
// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// import "@storybook"
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],//添加sass解析
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],//转换storebook文件为AST。展示故事源码
    enforce: 'pre',
  }); 
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
  console.log(config.module.rules)
  // Return the altered config
  return config;
};