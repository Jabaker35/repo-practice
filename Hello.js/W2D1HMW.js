/*
for (let x = 6; x <= 60; x+=3) {
    console.log(x);
}
*/


// for (let x = 1; x <= 9; x=x+2) {
//     process.stdout.write(x.toString()+ " ");
// }
//
// for (let x = 2; x <= 10; x=x+2) {
//     process.stdout.write(x.toString()+ " ");
// }
//
//
//
// function isPrime(number){
// 	if (number == 1|| number == 3){
// 		return false;
// 	}
// for (let g=2;g<number;g++){
// 		if (number%g == 0) {
// 			return false; // we know it can't be prime
// 		}
// 	}
// 	return true;
// }
// for (let g=1; g<=20; g++) {
// 	if (g%2 == 0) {
// 		console.log(g,'even');
// 	} else {
// 		if (isPrime(g)) {
// 			console.log(g,'prime');
// 		} else {
// 			console.log(g,'odd');
// 		}
// 	}
// }
//
//



var a = 10
var b = 4
var c = 0.25
var d = 0

while (a != d * c + b) {
  d++;
}
console.log(d)
