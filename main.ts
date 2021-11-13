// Copyright (c) 2021-2021 Dhairy Srivastava. All rights reserved. MIT license.
// OOP code

import { Canvas as Window } from "https://deno.land/x/sdl2@0.2-alpha.1/src/canvas.ts";
import { Golf } from "./objects/Golf.ts";
interface CanvasProps {
  title: string;
  width: number;
  height: number;
  sleepSyncTimer: number;
}
class Canvas extends Window {
  props: CanvasProps;
  constructor() {
    super({
      title: props.title,
      height: props.height,
      width: props.width,
      centered: true,
      fullscreen: false,
      hidden: false,
      resizable: false,
      minimized: false,
      maximized: false,
      flags: null,
    });
    this.props = props
  }
  frame() {
    this.setDrawColor(25, 20, 55, 255);
    this.clear();
    golfBall.render();
    this.present();
    Deno.sleepSync(this.props.sleepSyncTimer);
  }
}
export const canvas = new Canvas();
canvas.props
let isSpace = false;

const golfBall = new Golf({
  x: 100,
  y: 100,
});

for await (const event of canvas) {
  switch (event.type) {
    case "draw":
      canvas.frame();
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
