//Sort items into correct order
// function sortItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] < array[j + 1]) { //reverses sorting the order by changing > to <
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }


//Swap items which also replaces certain items
// function sortItems(array) {
//     let swapped = true;
//     do {
//       swapped = false;
//       for (let j = 0; j < array.length; j++) {
//         if (array[j] > array[j + 1]) {
//           let temp = array [j];
//           array[j + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);
//     return array;
//   }

// var numbersToSort = [5,3,8,4,6]
// console.log(sortItems(numbersToSort));


//Sort items in reverse
// function bubbleSort(a) {
//     var swap;
//     var n = a.length-1;
//     var x = a;
//     do {
//         swap = false;
//         for (var i=0; i < n; i++)
//         { if (x[i] > x[i+1]) //reverses sorting the order by changing > to <
//             {  var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swap = true; }
//         }
//         } while (swap);
//  return x;
// }
//
// console.log(bubbleSort(['N','L','K','T','Y','B']));


// var num = 0;
// var arr= [1,2,3,4,5,6,7,8];
// var found = false;
//
// for (var i=0; i < arr.length; i++) {
//   if (arr[i]==num) {
//     console.log("Found");
//     found = true;
//   }
// }
//
// if (found == false) {
//   console.log("Not Found");
// }


// var toFind = 4;
// var arr = [1,2,3,4,5,6,7,8,9,10];
//
// var start = 0;
// var end = arr.length-1;
// var mid = 0;
// var found = false;
//
// while (start <= end) {
//   mid = parseInt((start+end)/2);
//   if (arr[mid] == toFind){
//     found = true;
//     console.log("Found");
//     break;
//   } else if (arr[mid] < toFind){
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
//
// if (found == false){
//   console.log("Not Found");
// }
