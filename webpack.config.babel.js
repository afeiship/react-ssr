import {Config} from './src/config';
const TARGET = process.env.npm_lifecycle_event;


export default  () => {
  return require(`./build/webpack.config.${Config.env}.babel.js`);
};