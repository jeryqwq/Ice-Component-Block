import { configure,addParameters ,setAddon ,addDecorator} from '@storybook/react';
import { create } from '@storybook/theming/create';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
    inline:true,
  })
);
setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);
const myThemes= create({
  base: 'light',

  // colorPrimary: 'red',
  // colorSecondary: 'deepskyblue',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink', 头部背景色

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Data Shower',
  brandUrl: 'http://192.168.4.145:8001',
  // brandImage: '',
});
// Option defaults.
addParameters({
  options: {
    theme:myThemes,
  },
});
// const loaderFn=()=>([//配置手动引入
//   require("./../components/ListPosition/lib/index")
// ])
// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
