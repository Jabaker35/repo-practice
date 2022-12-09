/*
for (var i = 10; i > 0; i++) {
  console.log(i);
}
*/

// //while loop
// var i=1;
// while (i <= 10){
//   console.log(i);
// }
//
// // do while loop
// var i=1;
//  do {
//   console.log(i);
//   if (i==5)
// } while (i <= 10)
//
// //foreach or forin loop
// var sub = [1,2,3,4,5,6,7,8,9,10];
// for(i in sub){
//   console.log(sub[i]);
// }

// let i=0;
// while (i <= 20) {
// if (i % 2 == 0 )
//   console.log(i * 3);
//   i++;
// }


// Module 2 Day 2 Lab & Code Smith!!!


// var sum = 0;
// var i = 1;
// while (i <= 20) {
//   sum += i;
//   i++;
// }
// console.log(sum)


// var num = 1;
// while (num <= 20){
//   if (num % 2 == 0){
//     console.log(num);
//   }
//   num++;
// }


// var f = 0;
// while (f <= 20){
//   if (!(f % 2 == 0 || f % 3 == 0)) {
//     console.log(f)
//   }
//   if (f == 2 || f == 3) {
//     console.log(f)
//   }
//   f++;
// }


// while (count != 8) {
//   console.log(count)
//   count += 1;
//   count++;
// }
// // Or
// while (count < 8) {
//   console.log(count)
//   count += 1;
//   count++;
// }


// var addThis = 0
// var sum = 0

// while (addThis < 10) {
//   sum += addThis;
//   console.log(addThis);
//   addThis++;
// }
// console.log(sum)


// const num = 40;
// let final;

// if (num > 100) {
//   final = null;
// } else {
//   final = num * 2;
// }
// console.log(final);


// const fb = [];

// for (let num = 1; num <= 16; num++){
//   if (num % 3 == 0 && num % 5 == 0){
//       fb.push("fizzbuzz")
//     } else if (num % 3 == 0) {
//       fb.push("fizz")
//     } else if (num % 5 == 0) {
//       fb.push("buzz")
//     } else { fb.push(num) }
//   console.log(fb)
// }


/*
 * majorityElementTopTwo
 * 
 * Write a function which accepts an array of integers and returns in a new two item array
 * the two integers in the input that appear most frequently.
 * 
 * 
 * majorityElementTopTwo([3,3,1,2,1,1,4,4,4,4]); ==> [4,1]
 *                        i
 * 
 */
function majorityElementTopTwo(num) {
  var count1 = [];
  var count2 = [];
  var candidate1 = num[0];
  var candidate2 = num[0];

  for (i=1; 1 < num.length; i++){
    if(count1 && count2 == 0) {
      candidate1 && candidate2 - num[i];
    } else if (num[i] == candidate1 && candidate2) {
      count1++; count2++
    } else {
      count1--; count2--
    }
    return [candidate1, candidate2]
  }
  
}
console.log(majorityElementTopTwo([3,3,1,2,1,1,4,4,4,4]));


// function majorityElementTopTwo(intarr) {
//  const [first, second] = [...new Set(intarr)]
//   .map((num) => [num, intarr.filter((n) => n === num).length])
//   .sort((a, b) => b[1] - a[1])
//   .slice(0,2);
//   return [first[0], second[0]];  
// }

// console.log(majorityElementTopTwo([3,3,1,2,1,1,4,4,4,4]));