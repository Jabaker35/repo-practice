const generateSquares = () => {
  $(()=> {
    for(let i = 1; i <= 1000; i++){
    console.log(i);
    const $square = $('<div>').addClass('square');
    $square.css('background-color', randColorRGB());
    $square.text(i);
    $('body').append($square);
  }}
});
$square.attr('id', 'square', i);
}


$(() => {
  generateSquares(1000);
});

const randColorRGB = () => {
  const red = Math.floor( Math.random() * 256);
  const green = Math.floor(Math.random()* 256);
  const blue = Math.floor(Math.random()* 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

console.log(randColorRGB())
