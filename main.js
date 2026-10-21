const { app, BrowserWindow } = require('electron');

function createWindow() {
const win = new BrowserWindow({
width: 450,
height: 800,
minWidth: 320,
minHeight: 500,
title: 'Calculatrice Scientifique',
autoHideMenuBar: true,
webPreferences: {
nodeIntegration: false,
contextIsolation: true
}
});

win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
app.quit();
}
});
