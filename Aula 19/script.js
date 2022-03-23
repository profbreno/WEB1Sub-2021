function setElementBackground(elemento) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  if (elemento != undefined) {
    var objeto = document.getElementById(elemento);
    if (objeto) {
      objeto.style.background = "rgb(" + red + "," + green + ", " + blue + ")";
    }
  }
  return [red, green, blue];
}

function findMax() {
  var i,
    max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let x = findMax(1, 212, 31, 404, 530, 60, 7, 89, 992, 210);
let y = setElementBackground("botao");
console.log(x);
console.log(y);

// Funções anônimas
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(20, function (x) {
  console.log(x);
});

// Arrow functions
let sum = (a, b) => a + b;
console.log(sum(30, 43));
