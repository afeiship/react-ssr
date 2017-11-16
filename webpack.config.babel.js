import {Config} from './src/config';

export default  () => {
  return require(`./build/webpack.config.${Config.env}.babel.js`);
};