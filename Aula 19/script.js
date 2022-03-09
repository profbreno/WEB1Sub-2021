function setElementBackground(elemento) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var objeto = document.getElementById(elemento);
  if (objeto) {
    objeto.style.background = "rgb(" + red + "," + green + ", " + blue + ")";
  }
}
