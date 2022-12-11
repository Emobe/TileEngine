class Tileset {
  name: string;
  tileWidth: number;
  tileHeight: number;

  constructor(name: string, tileWidth: number = 32, tileHeight: number = 32) {
    this.name = name;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

}

export default Tileset;