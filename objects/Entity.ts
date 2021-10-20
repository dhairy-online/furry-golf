interface EntityOptions {
  x: number;
  y: number;
}

export class Entity {
  x: number;
  y: number;
  constructor(props: EntityOptions) {
    this.y = props.y;
    this.x = props.x;
  }
}
