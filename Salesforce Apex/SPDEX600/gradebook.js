function avgArray(arrayParm){
    //average = sum of all the numbers divided by the count of numbers
    for (let i = 0; i < 20; i++){
        array5.push(i);
    }

    //use the length property to determine the number of elements
    let countOfNums = arrayParm.length;

    //variable to hold the sum of all the numbers in the array
    let sum = arrayParm.reduce((acc, elem) => acc + elem, 0);

    if (i >= 90) {
        ('A')
      } else if (x >= 80){
        ('B')
      } else if (x >= 70) {
        ('C')
      } else if (x >= 55) {
        ('D')
      } else if (X < 55) {
        ('F')
      } else {
        ('Failed')
      }

    return sum / countOfNums;
};

let array5 = [];
let average = avgArray(array5);
console.log(average);

