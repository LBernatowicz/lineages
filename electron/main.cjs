const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#202020",
      symbolColor: "#fff",
      height: 36,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // W dev trybie ładujemy Vite serwer
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools(); // otwiera devtools
  } else {
    // W buildzie ładujemy index.html z dist/
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
