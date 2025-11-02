'use strict';

class RadiusVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return `${this.x}:${this.y}`;
    return Math.hypot(this.x, this.y);
  }
}

const r = new RadiusVector(3, 4);

console.log('Length of RadiusVector:', +r);
console.log(`Direction of RadiusVector: ${r}`);
