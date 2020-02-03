'use strict';

class Shape {
  get area() {
    throw new Error('Method is not implemented');
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

class Circle  extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  get area() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
}

// Usage

const shape1 = new Rectangle(100, 200);
const shape2 = new Circle(100);
const shape3 = new Square(200);

console.dir({ shape1 });
console.dir({ shape2 });
console.dir({ shape3 });

console.log('shape1.area:', shape1.area);
console.log('shape2.area:', shape2.area);
console.log('shape3.area:', shape3.area);
