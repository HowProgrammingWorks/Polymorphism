'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

// Usage

const shape1 = new Rectangle(100, 200);
const shape2 = new Circle(100);

console.dir({ shape1 });
console.dir({ shape2 });

console.log('shape1.area:', shape1.area);
console.log('shape2.area:', shape2.area);
