const path = require('path');
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
  // config.module.rules.push({
  //   test: /\.stories\.jsx?$/,
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],//配置源码显示，注册loader
  //   enforce: 'pre',
  // });

  console.log(config.module.rules)
  // Return the altered config
  return config;
};