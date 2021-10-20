import { Entity } from "./Entity.ts";
import { canvas } from "../main.ts";
export class Golf extends Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  golfTexture: number;
  constructor(props: { x: number; y: number }) {
    super({ x: props.x, y: props.y });
    this.x = props.x;
    this.y = props.y;
    this.height = 64;
    this.width = 64;
    const golfSurface = canvas.loadSurface("assets/sprites/golfball.png");
    this.golfTexture = canvas.createTextureFromSurface(
      golfSurface,
    );
  }
  render() {
    canvas.copy(
      this.golfTexture,
      {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height,
      },
      {
        x: this.x,
        y: this.y,
        width: 30,
        height: 30,
      },
    );
  }
}
