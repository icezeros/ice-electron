import { EventEmitter } from 'events';
import { app, shell, screen, BrowserWindow } from 'electron';

const defaultWindowOptions = {
  titleBarStyle: 'hiddenInset',
  show: false,
  width: 1024,
  height: 768,
  webPreferences: {
    nodeIntegration: true,
  },
};
export default class Window extends EventEmitter {
  constructor(options = {}) {
    super();
    this.isReady = false;
    this.window = null;
    this.options = options;
    this.init();
  }
  showWindow() {
    if (!this.window) {
      throw new Error('not find window');
    }
    this.window.show();
    this.window.focus();
    return this.window;
  }
  hideWindow(page) {
    if (!this.window) {
      throw new Error('not find window');
    }
    this.window.hide();
  }
  init() {
    const options = this.options;
    this.window = new BrowserWindow({
      ...defaultWindowOptions,
      ...options.window,
    });
    // this.window.webContents.on('new-window', (e, url) => {
    //   e.preventDefault();
    //   shell.openExternal(url);
    // });
    if (options.url) {
      this.window.loadURL(options.url);
    }

    this.window.once('ready-to-show', () => {
      if (!hidden) {
        this.window.show();
      }
    });

    return this.window;
  }
}
