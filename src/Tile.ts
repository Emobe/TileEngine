/**
 * @author Anthony Shuker <anthony@emobe.uk>
 */

/**
 * @classdesc
 * A Tile represents a single tile within a Tilemap.
 * 
 * @class Tile
 * @constructor
 */

class Tile {

  layer: number;
  index: number;
  x: number;
  y: number;

  constructor(layer: number, index: number, x: number, y: number){
    this.layer = layer;
    this.index = index;
    this.x = x;
    this.y = y;
  }


}

export default Tile;