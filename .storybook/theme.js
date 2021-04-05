import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorSecondary: '#1E2021',
  colorPrimary: '#086B61',

  // UI
  appBg: 'white',
  appBorderRadius: 5,
  appBorderColor: '#f2f2f2',

  // Typography
  fontBase: '"Helvetica Neue", sans-serif',

  // Toolbar
  barSelectedColor: '#086B61',
  barBg: '#f6f6f6',

  //Brand
  brandTitle: 'Dino DNA',
  brandUrl: 'https://github.com/dinodna',
  brandImage: 'https://avatars.githubusercontent.com/u/6298219?v=4'
});
