class VendingMachine {
  constructor (snacks) {
    this.snacks = snacks
  } vend (snacksSell) {
    return this.snacks[snacksSell];
  }
}

class Snack {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

let snack1 = new Snack ('Combos', '$0.75')
let snack2 = new Snack ('Twizzlers', '$0.50')
let snack3 = new Snack ('Twix', '$1')

var quick = [snack1,snack2,snack3]

let vm = new VendingMachine (quick)
console.log(vm.vend(1));

let snack4 = new Snack ('Mr. Goodbar', '$1')
let vm2 = new VendingMachine ([snack1,snack4])
console.log(vm2.vend(1));
