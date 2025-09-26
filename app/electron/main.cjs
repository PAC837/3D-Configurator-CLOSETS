/* Electron main process entry (CommonJS) */
const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = !!process.env.VITE_DEV_SERVER_URL;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: "#ffffff",
    webPreferences: {
      // preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  if (isDev) {
    const url = process.env.VITE_DEV_SERVER_URL;
    win.loadURL(url);
    win.webContents.openDevTools({ mode: "detach" });
  } else {
    // In production, load the built index.html produced by Vite
    const indexHtml = path.join(__dirname, "..", "dist", "index.html");
    win.loadFile(indexHtml);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  // On macOS it is common for applications to stay open until the user quits explicitly
  if (process.platform !== "darwin") {
    app.quit();
  }
});
