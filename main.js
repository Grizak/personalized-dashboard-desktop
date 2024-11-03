const { app, BrowserWindow } = require('electron');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

app.setName('Persionalized Dashboard');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL(process.env.URL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
