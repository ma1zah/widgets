// this controls the main process of the widgets.

// Each widget is a window.
const {app, BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');

const boundsPath = path.join(app.getPath('userData'), 'window-bounds.json');

function loadBounds() {
    try {
        return JSON.parse(fs.readFileSync(boundsPath, 'utf8'));
    } catch (error) {
        return {};
    }
}

function saveBounds(boundsByKey) {
    try {
        fs.writeFileSync(boundsPath, JSON.stringify(boundsByKey, null, 2), 'utf8');
    } catch (error) {
    }
} 



function createWindow ({gifUrl}, boundsByKey) {
    const savedBounds = boundsByKey[gifUrl];
    // Create the browser window.
    const win = new BrowserWindow({
        width: savedBounds?.width ?? 400,
        height: savedBounds?.height ?? 400,
        x: savedBounds?.x,
        y: savedBounds?.y,
        frame: false,
        transparent: true,
        hasShadow: true,
        show: false,
    });

    win.loadFile('index.html', {
        query: { gif: gifUrl }
    });
    win.webContents.once('did-finish-load', () => {
        win.webContents.send('set-gif-url', gifUrl);
    });

    win.once('ready-to-show', () => {
        win.showInactive();
    });

    win.setAlwaysOnTop(false, 'widget');

    const persistBounds = () => {
        boundsByKey[gifUrl] = win.getBounds();
        saveBounds(boundsByKey);
    };

    win.on('move', persistBounds);
    win.on('resize', persistBounds);
    win.on('close', persistBounds);
}

// put the gifs here
app.whenReady().then(() => {
    const boundsByKey = loadBounds();
    // paste the links of the gifs you want to use here.
    createWindow({gifUrl: "https://i.pinimg.com/originals/03/c3/66/03c3666b87ad9d9278ffebc10449a33f.gif"}, boundsByKey);
    createWindow({gifUrl: "https://i.pinimg.com/originals/c8/8b/08/c88b087a46939a683636ab87390cdec4.gif"}, boundsByKey);
    createWindow({gifUrl: "assets/moe1.gif"}, boundsByKey);
})