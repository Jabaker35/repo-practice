// RANDOM COLOR SCRIPT
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); //Unlimited color combo
  document.getElementById("1").style.backgroundColor = "#" + randomColor; //Set random colors to each individual circle
  document.getElementById("2").style.backgroundColor = "#" + randomColor;
  document.getElementById("3").style.backgroundColor = "#" + randomColor;
  document.getElementById("4").style.backgroundColor = "#" + randomColor;
  document.getElementById("5").style.backgroundColor = "#" + randomColor;
  document.getElementById("6").style.backgroundColor = "#" + randomColor;
  document.getElementById("7").style.backgroundColor = "#" + randomColor;
  document.getElementById("8").style.backgroundColor = "#" + randomColor;
  document.getElementById("9").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
genNew.addEventListener("click", setBg()); //Generates a new color every  click
setBg(); //Used from the child div onclick
