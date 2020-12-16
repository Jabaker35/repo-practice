// var shoppingList = ["cool ranch doritos","kings hawaiian sweet bread","peanut butter oreos","fruit loops cereal"];
// shoppingList.push('Hendricks gin');
// console.log(shoppingList);


// var yoda = ["try","no","is","there","not","do","or","do"];
// yoda.reverse()
// console.log(yoda);


// var waitList = ["Chance the Rapper","Khalid","Tay-Tay","Barry Manilow","Piko Taro"];
// var nowServing = "";
// waitList.reverse()
//
// for (var i = 0; i < 5; i++){
//   nowServing = waitList.pop();
//   console.log("Now Serving " + nowServing);
//   console.log(waitList);
// }
// console.log("Done");


// var waitList = ["Chance the Rapper","Khalid","Tay-Tay","Barry Manilow","Piko Taro"];
// var nowServing = "";
//
// for (var i = 0; i < 5; i++){
//   nowServing = waitList.shift();
//   console.log("Now Serving " + nowServing);
//   console.log(waitList);
// }
// console.log("Thank You for Your Patronage");


// var shoe = ["just","do","it"];
// shoeString = shoe;
// console.log(shoeString.join(" "));


// let arr = [];
//
// for (let i = 0; i <= 10; i++ ) {
//   arr[i] = i;
// }
// console.log(arr);


// var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
// notHof = hof.pop();
// console.log(hof.toString());
// console.log(notHof);


// var testMenu = [ "McPizza Burger","McFly Burger","McLinguine","McChar-Siu Bau","McChop-Chae","McPancit"];
// testMenu.splice(2,3);
// console.log(testMenu.join(" "));


// var westSide = ["Dre","2Pac","Snoop"];
// var eastSide = ["Biggie","Diddy","Craig Mack"];
// oneLove = westSide.concat(eastSide);
// console.log(oneLove);


// var fbFriends = ["Khalid","Yeezy","Kimmy K","Lamar Odom","Lebron","Warren Buffet"];
// unFriend = fbFriends.splice(1,3);
// console.log(unFriend);


// user1 = {first_name: "Joshua",
// last_name: "Green",
// company: "Green Mountain",
// department: "HR Assistant",
// };
// console.log(user1);


// const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };
//
// const objToArray = [];
// // ADD CODE HERE
// for (const property in checkObj){
//   let tempVar = checkObj[property];
//   if (checkObj[property] >= 2)
//   	objToArray.push(tempVar);
// }


const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
const objToArray=Object.values(checkObj);
for(var i=0; i<objToArray.length; i++)
  {
    if (objToArray[i]%6==0);
      divBy6=true;
}
