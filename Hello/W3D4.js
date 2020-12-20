class Fish {
    swim() {
      console.log('swim');
    }
};

class Nemo extends Fish {
  constructor (color){
    super();
    this.color = color;
  }
};

const nemo = new Nemo ('gold')
nemo.swim();


// class Animal {
//   constructor (name, age, color, legs, superpower) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;
//     this.superpower = superpower
//   } speak() {
//     console.log('My super power is: ' + this.superpower);
//   } walk() {
//     console.log(this.name + ' loves to go on long walks.');
//   } play () {
//     console.log(this.name + ' has a favorite pass time.');
//   }
// }
//
// const dog = new Animal ('Rover', 9, 'blue', 4, 'weather');
// dog.speak()
// dog.walk()
// dog.play()
//
// const cat = new Animal ('Felix', 10, 'black', 4, 'sonic boom');
// cat.speak()
// cat.walk()
// cat.play()
//
// const cow = new Animal ('Delvin', 12, 'brown', 4, 'super strength')
// cow.speak()
// cow.walk()
// cow.play()
//
// console.log(dog);
// console.log(cat);
// console.log(cow);
//
//
// class User {
//   constructor (firstName, lastName, department){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.department = department;
//   } changeDepartment(newDepartment) {
//     this.department = newDepartment;
//   }
// }
//
//  const userA = new User('John', 'Baker', 'HR');
//  userA.changeDepartment('CEO');
//
//  const userB = new User('Joshua', 'Baker', 'Comptroller');
//  userB.changeDepartment('CFO');
//
//  const userC = new User('Gino', 'Givens', 'Manager');
//  userC.changeDepartment('HR');
//
// console.log(userA);
// console.log(userB);
// console.log(userC);
