const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if ( inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.')
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
console.log(orderPromise);


console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
 console.log("Time's Up!")
}

setTimeout(usingSTO, 3000)

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");


console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
 console.log("Time's Up!")
}

setTimeout(usingSTO, 3000)

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

onst {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
.then(handleSuccess).catch(handleFailure);


const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)
       })

    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray)
       })

    .then((successMessage) => {
        console.log(successMessage);
      });


      const {checkAvailability} = require('./library.js');

      const onFulfill = (itemsArray) => {
        console.log(`Items checked: ${itemsArray}`);
        console.log(`Every item was available from the distributor. Placing order now.`);
      };

      const onReject = (rejectionReason) => {
      	console.log(rejectionReason);
      };

      // Write your code below:

      const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
      const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
      const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

      Promise.all([checkSunglasses, checkPants, checkBags])
        .then(onFulfill)
        .catch(onReject);
