# widgets
An open-source tiny Electron widgets for macOS: transparent, frameless windows that show GIFs.

## Features
- Multiple windows, each with its own GIF
- Transparent, frameless windows
- Window position and size persist between restarts

## Requirements
- For the packaged app: none
- For running from source: Node.js (LTS recommended) and npm

## Setup (from source)
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
3) Change GIFs by editing gifs.json.

## Add or change GIFs
You can use URLs or local files.

### Use a URL
1) In gifs.json, add a URL string:

```js
"https://example.gif"
```

### Use a local file
1) Put the file in an `assets/` folder, for example: `assets/my.gif`
2) In gifs.json, add a local path string:

```js
"assets/name.gif"
```

## Notes
- macOS does not support forcing a window to stay behind all other apps.
- Window bounds are saved per GIF URL in Electron's user data folder.

## Project structure
```
index.html
main.js
package.json
README.md
gifs.json
assets/
```

Chatgpt helped me to make this. I'm learning lol.
