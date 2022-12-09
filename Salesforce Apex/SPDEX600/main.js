/*
let firstVar = 10;
let secondVar = 'Hello';
let thirdVar;

console.log(secondVar + ' World!'); 
console.log(firstVar);


let greeting = 'Yo';
let name = 'Uncle';
let question = 'How you been!';
let welcome = `${greeting}, ${name} ${question}`;
console.log(welcome.toUpperCase());
*/

/* For Loop Expressions
for (let i = 0; 1 < array1.length; i++){
    console.log(array1[i]);
}

for (let i in array1){
    console.log(array[i]);
}

for (let elem of array1){
    console.log(elem)
}

//Used to go through current elements within an array
array1.forEach(function(elem){
    console.log(elem);
});

//Ternary Operation
let age = 18;
let canVote = (age >= 18) ? 'Voting age' : 'Cannot vote';
console.log(canVote);
/*
.pop() remove the element from the end of an array
.push() adds the element to the end of an array
.shift() remove the element from the beginning of an array
.unshift() adds elements into an array in the beginning
.splice() remove while inserting all or a few elements from within the array
.slice() copy all or a few elements of an array with a starting/ending index
.reduce() used as an sum function adding numbers/integers or concatenating strings
.flat() used to go into the first level within a grouping of array sub-levels unless/until
        a number is specified within the method
*/
/*
let totalAmount = recList.reduce((acc, elem) => acc + elem.Amount, 0);
console.log(totalAmount);

let array = [];

for (let i = 0; i < 20; i++){
    array.push(i);
}
console.log(array);

let array1 = array.reduce((acc, elem) => acc + elem, 0);
console.log(array1);

let array2 = 0;
for (let elem of array){
    console.log('Total Amount is currently = ' + array2)
    array2 = array2 + array1;
}
console.log(array2);

array.forEach(function(elem){
    console.log(elem);
});

let newArray = array.filter(elem => elem > 10);
console.log(newArray);

let array1 = [1,2,[3,4],[5,[6,7]]];
let array2 = array1.flat();
console.log(array2);

let array1 = ['Alpha','Beta','Epsilon'];
//Start at index 1 without removing any elements
array1.splice(1,0,'Zeta');

//Declaration
function add(){
    return;
}

//Anonymous Expression
let var = function(){
    return;
}

//Named Expression
let var1 = function add(){
    return;
}

function mathFunc(op, num1, num2){
    let result = 0;

    if (op === 'add'){
        result = num1 + num2;
    } else if ( op === 'subtract'){
        result = num1 - num2;
    } else if ( op === 'multiply'){
        result = num1 * num2;
    } else if ( op === 'divide'){
        result = num1 / num2;
    } else {
        result = 'Not a valid operator';
    }

    return result;
    
}

console.log(mathFunc('add', 20, 10));

function avgArray(arrayParm){
    //average = sum of all the numbers divided by the count of numbers
    for (let i = 0; i < 20; i++){
        array5.push(i);
    }

    //use the length property to determine the number of elements
    let countOfNum = arrayParm.length;

    //variable to hold the sum of all the numbers in the array
    let sum = arrayParm.reduce((acc, elem) => acc + elem, 0);

    return sum / countOfNum;
};

let array5 = [];
let average = avgArray(array5);
console.log(average);

let array6 = [1,15,23,25,32,33];
let array7 = [3,67,24,53];

function avgTotal() {
    //Holds the value of each elem
    let total1 = 0;
    let total2 = 0;

    //Method used to sum/add each item within each array
    array6.forEach(function(elem){
        total1 = total1 + elem;
    });

    array7.forEach(function(elem){
        total2 = total2 + elem;
    });
   
    return average = (total1 + total2) / (array6.length + array7.length);
};

console.log(avgTotal());

function avgTotal() {
    //Reduce method to sum/add all the items within the first array
    let total1 = array6.reduce((acc, elem) => acc + elem);
    //Reduce method to sum/add all the items within the second array
    let total2 = array7.reduce((acc, elem) => acc + elem);
   
    //Method used to sum/add both arrays
    let fullTotal = total1 + total2;
    //Method used to sum/add the amount of numbers within each array
    let fullLength = array6.length + array7.length;

    return average = fullTotal / fullLength;
};

console.log(avgTotal());


function avgTotal() {
    //Holds the value of each elem
    let fullTotal = 0;
    
    for (let elem of array6){
        fullTotal = elem + fullTotal;
    }
   
    for (let elem of array7){
        fullTotal= elem + fullTotal;
    }

    //Method used to sum/add the amount of numbers within each array
    let fullLength = array6.length + array7.length;

    //Returns the average the arrays
    return average = fullTotal / fullLength;
};

console.log(avgTotal());

function avgTotal() {
    //Holds the value of each elem
    let array8 = array6.concat(array7);

    //Reduce method to sum/add all the items within the concatenated array
    let fullTotal = array8.reduce((acc, elem) => acc + elem);
    
    //Method used to sum/add the amount of numbers within each array
    let fullLength = array6.length + array7.length;

    //Returns the average the arrays
    return average = fullTotal / fullLength;
};
console.log(avgTotal());

let i = 0;
function recurve(){
    /*The increment was put in the conditional statement rather than being separate 
    from the operation which allows the loops to easily replace the value until
    it reaches the value either higher than or the same value as the other number
    */
   /*
   //Increments the i value until it reaches the number one higher than the other number
    if ( i++ > 4 ){
        console.log('Finished it!');
    } else {
        console.log('i: ' + i);
        recurve();
    } 
    
    //Increments the i value until it reaches the same value as the other number
    while (i++ < 5){
        console.log('i: ' + i);
        recurve();
    }
    
}
//Continues the recurve method until the conditional statement w/in the loops are finished
recurve();
//This will populate in the console after the while loop has finished
console.log('Finished it!');

function avgTotal() {
    //Holds the value of each elem
    let fullTotal = 0;
    let fullLength = array6.length + array7.length;

    array6.forEach(elem => {
        fullTotal += elem;
    });

    array7.forEach(elem => {
       fullTotal += elem;
    });

    return average = fullTotal / fullLength;
};

console.log(avgTotal());

class Course {
    constructor (title, topicList, timeRequired){
        this.title = title;
        this.topic = [];
        this.topic = this.topic.concat(topicList);
        this.time = timeRequired;
    }

    get topics(){
        let returnedDisplay = '';
        let i = 1;

        this.topic.forEach(elem => {
            returnedDisplay = returnedDisplay + '\n' + (i) + ': ' + elem;
            i++;
        })
        return returnedDisplay;
    };

    addTopics(value) {
        this.topic.push(value);
    }

    set addAnotherTopic(value){
        this.topic.push(value);
    }

};

let myCourse = new Course('New Learning', 'Math', 45);
//Without the Setter method
myCourse.addTopics('English');
//With the Setter method
myCourse.addAnotherTopic = 'Language';
console.log(myCourse);
 

class Music {
    
    constructor(artist, album, genre, year) {
        this.artist = artist;
        this.album = album;
        this.genre = genre;
        this.year = year;
    }

    // retrieves the value with the required return statement
    get musical(){
        
        this.music = [this.artist, this.album, this.genre, this.year];
        return this.music;
    }

    // allows a value to be passed in as a parameter
    set addMusic(value){
        this.music = [this.artist, this.album, this.genre, this.year];
        this.music.push(value);
    }
    
}

let myMusic = new Music ('Meachum L. Clarke & True Purpose', 'The Victory Experience', 'Christian', 2017);
myMusic.addMusic = ['Ricky Dillard & New G', 'Breakthrough: The Exodus', 'Gospel', 2022];
console.log(myMusic.musical);

let person = 'John';

function printBanner() {
    changeBanner();
    console.log('Happy Birthday, ' + person);
}

function changeBanner() {
    let person = 'Henry';
}

printBanner();
*/

function displayTime(){
    let date = new Date(); //create a variable and initializing to the current date
    console.log(date);
    let time = date.toLocaleTimeString();
    console.log(time);
    document.getElementById('clock').innerHTML = time;
}

displayTime();

setInterval(displayTime, 10000);