'use strict';

// Dynamic dispatch

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  getArea() {
    return Math.pow(this.side, 2);
  }
}

// Usage

const shape1 = new Rectangle(100, 200);
const shape2 = new Circle(100);
const shape3 = new Square(100);

const shapes = [shape1, shape2, shape3];

for (const shape of shapes) {
  const entity = shape.constructor.name;
  const area = shape.getArea();
  console.log(`Area of ${entity} is ${area}`);
}
