// var sum;
// sum = theSum (10,10);
//
// function theSum(x,y){
//   return x+y;
// };
// console.log(sum);

// function oddEven (x) {
//   if (x % 2 == 0)
//   return "even";
//   else {
//     return "odd";
//   }
// };
// //Main =================
// console.log(oddEven(10))


function printX(){
  var x = 3;
  console.log("x within printX "+x);
  console.log("Calling printY "+printY());
  function printY(){
    var y = 5;
    console.log("y "+y);
  }
}

var se = 30;
console.log("se "+se);
console.log("Calling print X"+printX());
console.log("Calling printY "+printY());
