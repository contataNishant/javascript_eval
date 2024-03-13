class Shape {
    area() {
       return 0;
    }
    toString(){
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
  
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
  
    area() {
        return this.length * this.width;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
  
    area() {
        return 0.5 * this.base * this.height;
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.area());
  
  const rectangle = new Rectangle(4, 6);
  console.log("Rectangle Area:", rectangle.area());
  
  const triangle = new Triangle(3, 8);
  console.log("Triangle Area:", triangle.area());
  