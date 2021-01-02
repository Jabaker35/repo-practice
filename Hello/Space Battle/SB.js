//Basic constuction of the spaceship used for player and alien
class SpaceShip {
  constructor (hull, name, firepower, accuracy) {
    this.hull = hull;
    this.name = name;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}
//Welcome header to the player
console.log('%c Welcome to Space Battle', 'text-decoration: underline; font-size:40px; color: violet');

//Specifics of the players spaceship
let player = new SpaceShip (20, 'USS Schwarzenegger', 5, 0.7)
console.log(player);

//Looping through number of alien spaceships
const battle = []
for (let ship = 1; ship <= 6; ship++) {
    //Specifics of the alien spaceship
    //Calculates the health of an Alien's spaceship randomly
    var alienHull = Math.floor(Math.random()*4)+3;
    //Calculates the firepower of an Alien's ship randomly
    var alienFirePower = Math.floor(Math.random()*3)+2;
    //Calculates the accuracy of an Alien's ship randomly
    var alienAccuracy = (Math.floor(Math.random()*3)+6)/10;
    let alien = new SpaceShip (alienHull, 'alien', alienFirePower, alienAccuracy)
    battle.push(alien);
}; //Allows the player to fight each alien one at a time with random alien spaceships
console.log(battle);

//Loops through the battle until player wins or looses
while (battle.length > 0) {
  let remain = battle.pop();
  if (Math.random() < remain.accuracy) {
    console.log("%c Mayday Captain, we've been hit!", "font-weight: bold; font-size: 15px; font-variant: small-caps; color: red");
    player.hull = player.hull - remain.firepower;
    console.log(player.hull);
  } else if (Math.random() > remain.accuracy) {
    console.log("%c Congradulations Captain, we hit target " + player.firepower + " damage!", "font-style: italic; font-variant: small-caps; text-transform: capitalize; font-size: 15px; background: azure; border: 1px solid green");
    console.log(remain.hull - player.firepower);
  } console.log("%c Great Job Captain, Alien ship destroyed!", "font-weight: bold; font-variant: small-caps; font-size: 15px; font-variant: small-caps; color: blue");
  //Checks the player's health (hull) to see it has reached 0 before continuing game
  if (player.hull <= 0) {
    console.log("%c We did our best captain!", "font-weight: bold; font-variant: small-caps; font-size: 15px; background: azure; border: 1px solid red; color: orange");
    break;
  }; //Confirm if the player wants to continue the same battle
  if (!confirm("Continue: Yes/No?")) {
    console.log("%c Coward, Why run from a winning battle!", "font-weight: bold; font-size: 15px; font-variant: small-caps; color: grey");
    break;
  }
};

//Signals player the game is over if they won
if (player.hull > 0 && battle.length == 0) {
  console.log("%c Awesome Job Captian, all Alien ships have been destroyed!", "background: azure; border: 1px solid grey; text-transform: capitalize; font-weight: bold; font-style: italic; font-variant: small-caps; color: indigo; font-size: 15px");
}
