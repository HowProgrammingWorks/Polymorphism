'use strict';

const rectangle = (height, width) => ({
  get area() {
    return height * width;
  }
});

const circle = radius => ({
  get area() {
    return Math.pow(radius, 2) * Math.PI;
  }
});

// Usage

const shape1 = rectangle(100, 200);
const shape2 = circle(100);

console.dir({ shape1 });
console.dir({ shape2 });

console.log('shape1.area:', shape1.area);
console.log('shape2.area:', shape2.area);
