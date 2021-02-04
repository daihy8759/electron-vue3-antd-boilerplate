import { join } from 'path';
import { app, BrowserWindow } from 'electron';
import is_dev from 'electron-is-dev';

let win = null;

class createWin {
    constructor() {
        win = new BrowserWindow({
            width: 1024,
            height: 768,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
            },
        });

        const URL = is_dev
            ? `http://localhost:${process.env.PORT}`
            : `file://${join(__dirname, '../../dist/renderer/index.html')}`;

        win.loadURL(URL);
    }
}

app.whenReady().then(() => new createWin());

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        new createWin();
    }
});
