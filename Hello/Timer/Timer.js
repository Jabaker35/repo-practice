// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function startClock(userLimit) {
  "use strict";
  startTime = new Date();
  let [min,sec] = userLimit.split(':');
  limite = parseInt(min)*60 + parseInt(sec);
  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}
function updateTime() {
  "use strict";
  // read the current time
  var currentTime = new Date();
  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);
  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  // show the elapsed time
document.querySelector("#clock span").innerHTML = minutos + ":" + segundos;
  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos*60 + segundos >= limite) {
    document.getElementById("clock").classList.add("red");
  } else if () {
    document.getElementById("clock").classList.remove("blue");
  } else {

    document.getElementById("clock").classList.add("blue");

 document.getElementById("clock").classList.remove("red");
  }
}
