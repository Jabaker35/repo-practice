// function maxOfTwoNumbers (x,y) {
//   if (x > y) {
//   return x;
// } else if (x < y) {
//   return y;
// }
// };
// console.log(maxOfTwoNumbers(3,4));


// function maxOfThreeNumbers (x,y,z) {
//   if (x > y && x > z) {
//   return x;
// } else if (y > x && y > z) {
//   return y;
// } else if (x < z && y < z) {
//   return z;
// }
// };
// console.log(maxOfThreeNumbers(10,4,2));



// function isVowel(x) {
//
//   var result;
//
//   result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
//   return result;
// }
// console.log(isVowel("G"));


// //Week 2 Day 3 Morning Lab
// //Is this suppose to be written with function?
// let x = 'Meatballs';
// console.log(x.length);
// const str = 'Happy Holidays';
// console.log(str.length);


// function vowelCount(str) {
//   const count = str.match(/[aeiou]/gi).length;
//   return count;
// }
// console.log(vowelCount('Cloudy with a chance of meatballs'));


// Week 2 Homework 2
// const sum = [1, 2, 3, 4].reduce(add);
// function add(accumulator, a) {
//   return accumulator + a;
// }
// console.log(sum);

// var array = [1, 2, 3, 4];
// var sum = array.reduce(function(a, b) {
//   return a + b;
// });
// console.log(sum);


// let array = []
// function factorization(arr) {
//   for (let j = arr; j > 0; j--){
//     array.push(j);
//   }
//   return multiply();
// }
//
// function multiply() {
//   var sum = 1;
//   for (var i=0; i < array.length; i++) {
//     sum = sum * array[i];
//   }
//   return sum;
// };
// console.log(factorization(4));


// var print_names = function(...names) {
//     return names.length;
// }
// console.log(print_names('bar', 'better', 'beer'));


// function reverseString(str) {
//   return str.split("").reverse().join("");
// };
// console.log(reverseString("jag testar"));


// function longer(champ, contender) {
//   return (contender.length > champ.length) ? contender : champ;
// }
// function longestWord(str) {
//   var words = str.split(' ');
//   return words.reduce(longer);
// }
// console.log(longestWord("Salah is the greatest teacher"));


// var animals = ["cat","dog","fish"];
// var threeLetterAnimals = animals.filter(function(animal) {
//   return animal.length === 3;
// });
// console.log(threeLetterAnimals);


// String.prototype.reverseString = function () {
//   return this.split("").reverse().join("");
// };
// console.log("Per Scholas".reverseString());


String.prototype.content = function () {
  return this.split("").count().join("");
};
console.log("Per Scholas".content());
