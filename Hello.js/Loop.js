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


var sum = 0;
var i = 1;
while (i <= 20) {
  sum += i;
  i++;
}
console.log(sum)


var num = 1;
while (num <= 20){
  if (num % 2 == 0){
    console.log(num);
  }
  num++;
}


var f = 0;
while (f <= 20){
  if (!(f % 2 == 0 || f % 3 == 0)) {
    console.log(f)
  }
  if (f == 2 || f == 3) {
    console.log(f)
  }
  f++;
}


while (count != 8) {
  console.log(count)
  count += 1;
  count++;
}
// Or
while (count < 8) {
  console.log(count)
  count += 1;
  count++;
}


var addThis = 0
var sum = 0

while (addThis < 10) {
  sum += addThis;
  console.log(addThis);
  addThis++;
}
console.log(sum)


const num = 40;
let final;

if (num > 100) {
  final = null;
} else {
  final = num * 2;
}
console.log(final)


const fb = [];

for (let num = 1; num <= 16; num++){
  if (num % 3 == 0 && num % 5 == 0){
  fb.push("fizzbuzz")
} else if (num % 3 == 0){
  fb.push("fizz")
} else if (num % 5 == 0){
  fb.push("buzz")
} else {
  fb.push(num)
}
}
console.log(fb)
