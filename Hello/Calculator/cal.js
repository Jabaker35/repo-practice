var abc = document.getElementById('abc');
function pusbtn (obj) {
  var pushed = obj.innerHTML;
  if (pushed == '=') {
    abc.innerHTML = eval(abc.innerHTML);
  } else if (pushed == 'AC') {
    abc.innerHTML = '0';
  } else {
    if (abc.innerHTML == '0') {
      abc.innerHTML = pushed;
    } else {
      abc.innerHTML += pushed;
    }
  }
}
