// Circle
console.log("\n\n\n************Question2***************\n\n\n");

class circle {
  constructor(radius, color) {
    this.color = color;
    this.radius = radius;
    console.log(`
color   : ${this.color}
radius  : ${this.radius}
      `);
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    console.log(`Rdius : ${this.radius}`);
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    console.log(`Color : ${this.color}`);
  }

  getArea() {
    const area = Math.PI * this.radius ** 2;
    return `Circle Area : ${area.toFixed(3)}`;
  }

  getCircumference() {
    const circumference = 2 * Math.PI * this.radius;
    return `Circle Circumference : ${circumference.toFixed(3)}`;
  }
}

const circle1 = new circle(10, "red");

circle1.setRadius(12);
circle1.getRadius();

circle1.setColor("Blue");
circle1.getColor();

console.log(circle1.getArea());
console.log(circle1.getCircumference());
