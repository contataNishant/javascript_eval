// Parent class Shape
class Shape {
    constructor() {
        // Common properties or initialization logic for all shapes
    }

    calculateArea() {
        throw new Error("Subclasses must implement calculateArea()");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

// Example usage:
const circle = new Circle(5);
console.log(`Circle area: ${circle.calculateArea()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);

const triangle = new Triangle(8, 3);
console.log(`Triangle area: ${triangle.calculateArea()}`);
