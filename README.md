# widgets
Tiny Electron widgets for macOS: transparent, frameless windows that show GIFs.

## Features
- Multiple windows, each with its own GIF
- Transparent, frameless windows
- Window position and size persist between restarts

## Requirements
- Node.js (LTS recommended)
- npm

## Setup
```bash
npm install
```

## Run
```bash
npm start
```

## Usage
1) Start the app with `npm start`.
2) You can drag the widget windows to position them.
3) Change GIFs by editing main.js.

## Add or change GIFs
You can use URLs or local files.

### Use a URL
1) In main.js, put this in the //put the gifs here:

```js
createWindow({gifUrl: "https://example.gif"}, boundsByKey);
```

### Use a local file
1) Put the file in an `assets/` folder, for example: `assets/my.gif`
2) In main.js, put this in the //put the gifs here:

```js
createWindow({gifUrl: "assets/name.gif"}, boundsByKey);
```

The window reads the `gif` query param in [index.html](index.html) and sets the image `src`.

## Notes
- macOS does not support forcing a window to stay behind all other apps.
- Window bounds are saved per GIF URL in Electron's user data folder.

## Project structure
```
index.html
main.js
package.json
README.md
assets/
```

Chatgpt helped me to make this. I'm learning lol.
