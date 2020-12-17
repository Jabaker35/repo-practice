// Create a function that accepts two inputs (name and age) and returns an object.
// Let's call this function makePerson.
// function makePerson(name, age) {
// 	// add code here
// 	const user = {};
// 	user.name = name;
//   user.age = age;
// 	// user["age"] = age; //another way to identify the user age
//   return user;
// }
//
// const vicky = makePerson('Vicky', 24);
//
//
// // Uncomment these lines to check your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24


// Inside personStore object,
// create a property greet where the value is a function that logs "hello".
// const personStore = {
// 	// add code here
// 	greet: function () {
//   console.log("hello");
// }
//
// };
//
// // Uncomment this line to check your work!
// personStore.greet(); // -> Logs 'hello'


// Create a function personFromPersonStore that takes as input a name and an age.
// When called, the function will create person objects using the
// Object.create method on the personStore object.
// const personStore = {
//   greet: function() {
//     console.log('hello');
//   }
// }
//
// function personFromPersonStore(name, age) {
// 	// add code here
// 	let person = Object.create(personStore);
//   person.name = name;
// 	person.age = age;
//   return person;
// }
//
// const sandra = personFromPersonStore('Sandra', 26);
//
// // Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'


// Without editing the code you've already written,
// add an introduce method to the personStore object that logs
// "Hi, my name is [name]".
// const personStore = {
//   greet: function() {
//     console.log('hello');
//   }
// }
//
// function personFromPersonStore(name, age) {
// 	const person = Object.create(personStore);
//   person.name = name;
//   person.age = age;
//   return person;
// }
//
// const sandra = personFromPersonStore('Sandra', 26);
//
// // add code here
// personStore.introduce = function() {console.log(`Hi, my name is ${this.name}`)}
//
// // Uncomment this line to check your work!
// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'


// Create a function PersonConstructor that uses the
// this keyword to save a single property onto its scope called greet.
// greet should be a function that logs the string "hello".
// function PersonConstructor() {
// 	// add code here
// 	this.greet = function () {console.log("hello")}
// }
// const simon = new PersonConstructor();
// // Uncomment this line to check your work!
// simon.greet(); // -> Logs 'hello'


// Create a function personFromConstructor that takes as input a name and an age.
// When called, the function will create person objects using the new keyword
// instead of the Object.create method.
// function PersonConstructor() {
//   this.greet = function() {
//     console.log('hello');
//   }
// }
//
// function personFromConstructor(name, age) {
// 	// add code here
// 	let person = new PersonConstructor();
//   person.name = name;
// 	person.age = age;
//   return person;
// }
//
// const mike = personFromConstructor('Mike', 30);
//
// // Uncomment these lines to check your work!
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); // -> Logs 30
// mike.greet(); // -> Logs 'hello'


// Without editing the code you've already written,
// add an introduce method to the PersonConstructor function
// that logs "Hi, my name is [name]".


// Create a class PersonClass. PersonClass should have a constructor that is
// passed an input of name and saves it to a property by the same name.
// PersonClass should also have a method called greet that logs the string "hello".
// class PersonClass {
// 	constructor(name) {
//     // add code here
// 	this.name = name;
// 	}
//
// 	// add code here
// 	greet() {
//     console.log("hello");
//   }
// }
//
// const george = new PersonClass('George');
//
// // Uncomment this line to check your work!
// george.greet(); // -> Logs 'hello'


Create a class DeveloperClass that creates objects by extending the PersonClass class.
In addition to having a name property and greet method,
DeveloperClass should have an introduce method.
When called, introduce should log the string "Hello World, my name is [name]".
class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
  constructor(name) {
    super(name)
  } introduce() {
    console.log(`Hello World, my name is ${this.name}`)
  }
}
const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
