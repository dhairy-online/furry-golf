// Copyright (c) 2021-2021 Dhairy Srivastava. All rights reserved. MIT license.

import { Canvas } from "https://deno.land/x/sdl2@0.1-alpha.6/src/canvas.ts";
import { Golf } from "./objects/Golf.ts";

const canvasProperties = {
  title: "furry-golf",
  width: 800,
  height: 400,
  sleepSyncTimer: 10,
};
/**
 * A simple test!
 */
export const canvas = new Canvas({
  title: canvasProperties.title,
  height: canvasProperties.width,
  width: canvasProperties.height,
  centered: true,
  fullscreen: false,
  hidden: false,
  resizable: false,
  minimized: false,
  maximized: false,
});

let isSpace = false;

const golfBall = new Golf({
  x: 100,
  y: 100,
});

function gameLoop() {
  canvas.setDrawColor(25, 20, 55, 255);
  canvas.clear();
  golfBall.render();
  canvas.present();
  Deno.sleepSync(canvasProperties.sleepSyncTimer);
}

for await (const event of canvas) {
  switch (event.type) {
    case "draw":
      gameLoop();
      break;
    case "quit":
      canvas.quit();
      break;
    case "key_down":
      // Space
      if (event.keycode == 32) {
        if (!isSpace) isSpace = true;
      }
      break;
    case "mouse_button_down":
      // Left click
      if (event.button == 1) {
        if (!isSpace) isSpace = true;
      }
      break;
    default:
      break;
  }
}
