// CodeSmith.io Array Challenge

// Create a variable called fourthItem and assign it the value of the
// fourth item in the horror array ('Ghostface').
// Then console.log fourthItem to see the output.


// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
//
// // ADD CODE HERE
// let fourthItem = horror [3]
// console.log(fourthItem);
// // Write a console.log statement below to check your work!



// Use a built-in JavaScript method to add another show to the netflixShows array.
// Then log your updated array to the console.
// const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
//
// // ADD CODE HERE
// netflixShows.push("Boss Baby")
// // Write a console.log statement below to check your work!
// console.log(netflixShows)


// Using a for loop, decrement
// countDown by one each time the loop runs until it equals 0,
// making use of looping functionality instead of logging each number separately.
// let countDown = 10;
// // ADD CODE HERE
// for (countDown = 10; countDown > 0; countDown--){
//   if (countDown == 0); 0 == true;
// } // created an if loop that will only recognize 0
//
// // Uncomment the below line to check your work
//  console.log(countDown) // -> should print 0;


// // 1. Iterate through the synonyms array using a for loop, pushing a
// // greeting string with the format "Have a [synonym] day!"
// // into the greetings array.
// //
// // 2. Use a second for loop to iterate through the greetings
// // and console.log() each greetings.
//
// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];
//
// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
// for ( i = 0; i < synonyms.length; i++) {
//   greetings.push('Have a ' + synonyms[i] + ' day!');
//   } // for loop identifies each synonym as a single object + put into greetings
//
// console.log(greetings);
// // 2.
// // Loop through the greetings array, logging each greeting to the console:
// // 'Have a fantastic day!'
// // 'Have a wonderful day!'
// // 'Have a great day!'
// // ADD CODE HERE
// for (let i = 0; i < greetings.length; i++) {
//   console.log(greetings[i]);
// }


// For this challenge, loop through the arrays and push a string with the format
// "My name is [firstName] [lastName] and I am from [place]"
// into the array holding the respective bios.
// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];
//
//
// const bios = [];
//
// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'
//
// // ADD CODE HERE
// for (let i = 0; i < firstNames.length; i++) {
//   bios.push('My name is ' + firstNames[i] + " " + lastNames[i] + ' and' + ' I am from ' + places[i])
// }
// console.log(bios)


// You are given an array of five numbers called increaseByTwo.
// Use a for loop to iterate through the array and increase each number by two.
// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE
// for (let i = 0; i < increaseByTwo.length; i++) {
//   increaseByTwo[i] += 2;
// }
// console.log(increaseByTwo)
// // Uncomment the line below to check your work!
// // console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


// You are provided with an array, possibleIterable.
// Using a for loop, build out the object divByThree so that each key is an element
// of possibleIterable that is divisible by three.
// The value of each key should be the array index at which that key can be found
// in possibleIterable.
// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// // ADD CODE HERE
// for (let i = 0; i < possibleIterable.length; i++) {
//   if (possibleIterable[i] % 3 == 0) {
//     divByThree[possibleIterable[i]] = i;
//   }
// }
// console.log(divByThree)


// You are given an object called sumMe containing several key/value pairs
// and a variable called total whose initial value is 0.
// Using a for... in loop, iterate through the keys of sumMe; if the value
// corresponding to a key is a number, add it to total.
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for (let key in sumMe) {
  if (typeof (sumMe[key]) == 'number') {
    total = sumMe[key] + total;
  }
}
console.log(total)
