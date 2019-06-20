import { EventEmitter } from 'events';
import { app } from 'electron';
import is from 'electron-is';
import path from 'path';
import url from 'url';

import logger from './logger';
import Window from './window';
import handleQuit from './event/quit';
import onCrash from './system/crash';
import createTray from './system/tray';
export default class Application extends EventEmitter {
  constructor() {
    super();
    this.isReady = false;
    this.makeSingleInstance(() => {
      this.init();
    });
  }

  makeSingleInstance(cb) {
    // Mac App Store Sandboxed App not support requestSingleInstanceLock
    if (is.mas()) {
      cb();
      return;
    }

    const gotSingleLock = app.requestSingleInstanceLock();
    if (!gotSingleLock) {
      app.quit();
    } else {
      app.on('second-instance', (event, argv, workingDirectory) => {
        logger.warn('second-instance====>', argv, workingDirectory);
        global.mainWindow.showWindow();
        if (!is.macOS() && argv.length > 1) {
          this.handleAppLaunchArgv(argv);
        }
      });
      cb();
    }
  }
  init() {
    this.handleAppEvents()
      .then(() => handleQuit())
      .then(() => onCrash());
    //   .then(() => createTray());
  }
  stop() {}

  async handleAppEvents() {
    return new Promise((resolve, reject) => {
      app.on('ready', () => {
        const options = {
          window: {
            title: 'test',
            show: false,
            width: 1024,
            height: 768,
            webPreferences: {
              nodeIntegration: false,
            },
          },
        };
        if (process.env.NODE_ENV === 'development') {
          options.url = 'http://localhost:8000/';
        } else {
          options.url = url.format({
            pathname: path.join(__dirname, './dist/renderer/index.html'),
            protocol: 'file:',
            slashes: true,
          });
        }
        const mainWindow = new Window(options);
        mainWindow.showWindow();
        mainWindow.on('ready', () => {
          this.sendUrlToApplication();
          this.sendFileToApplication();
        });
        global.mainWindow = mainWindow;
        global.mainId = mainWindow.window.id;
        return resolve(mainWindow);
      });
    });
  }
}
