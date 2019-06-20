import { app } from 'electron';
import is from 'electron-is';

import Application from './Application';

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\');
}

/**
 * Fix Windows notification func
 * appId defined in .electron-vue/webpack.main.config.js
 */
// if (is.windows()) {
//   app.setAppUserModelId(appId);
// }

global.application = new Application();
