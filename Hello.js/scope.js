// const bar = (param1) => {
//   console.log("callback start");
//   param1();
// }
//
// bar( () => {console.log("function 1");});
// bar( () => {console.log("function 2");});

// var sum;
//
// function theSum(x,y,z) {
//   return x+y+z;
// }
//
// sum = theSum(3,3,3);
// console.log(sum);


// function sum(a,b,c) {
//   var z;
//   z = a + b + c;
//   return z / 3;
// };
//
// console.log(sum(3,6,9));

//ES5 2.
var sum = (a,b,c) => (a + b + c)/3;
console.log(sum(3,6,9));


// theSum = (x,y,z) => x=y+z;
//   console.log(theSum(3,3,3));
