// Q3. What are the possible ways to create objects and arrays in JavaScript. Provide example for all.  
// Creating Objects in JS:
// 1. Object Literal Syntax:
//     • The simplest way to create an object is using the object literal notation.
//     • We define key-value pairs inside curly braces {}.
//     • Example:
      const person = {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
      };
// 2. Using the new Keyword with Object Constructor:
//     • We can create an object using the global Array constructor.
//     • Example:
      const persons = new Object();
      person.firstName = 'John';
      person.lastName = 'Doe';
      person.age = 30;

// 3. Object Constructor Function:
//     • Define a constructor function (similar to a class) and create objects using the new keyword.
//     • Example:
      function Person(firstName, lastName, age) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
      }
      
      const person = new Person('John', 'Doe', 30);


// Creating Arrays:
// 1. Array Literal Syntax:
//     • The easiest way to create an array is using the array literal notation.
//     • Syntax: const arrayName = [item1, item2, ...];
//     • Example:
      const fruit = ['Apple', 'Orange', 'Mango', 'Banana'];
// 2. Using the new Keyword with Array Constructor:
//     • We can also create an array using the new Array() constructor.
//     • Example:
      const fruits = new Array('Apple', 'Orange', 'Mango', 'Banana');
// 3. Using Array Methods:
//     • Methods like concat(), push(), and unshift() allow We to add elements to an array dynamically.
//     • Example:
      const colors = ['Red', 'Green'];
      colors.push('Blue'); // Adds 'Blue' to the end
      colors.unshift('Yellow'); // Adds 'Yellow' to the beginning
