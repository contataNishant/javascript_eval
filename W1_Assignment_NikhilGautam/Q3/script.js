//Objects

//notation
const person = {
    firstName: "Nick",
    lastName: "John",
  
  };
  console.log(`First Name: ${person.firstName}`);
  console.log(`Last Name: ${person.lastName}`);
  
  
  //function
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  const myCar = new Car("Toyota", "Camry");
  console.log(`My car is a ${myCar.make} ${myCar.model}`);
  
  
  
  ///Array
  
  //notataion
  
  const fruits = ["apple", "banana", "cherry", "orange"];
  console.log(`Fruits: ${fruits}`);
  
  //function
  const colors = new Array("red", "green", "blue");
  console.log(`Colors: ${colors}`);
  