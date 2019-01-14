function gallonToLiter(volume) {
  return volume * 3.79;
}

function gallonToMilliliters(volume) {
  return gallonToLiter(volume) * 1000;
}

function quartsToGallons(volume){
  eturn volume / 4;
}

function cupsToQuarts(volume) {
  return volume / 4;
}

function cupsToGallons (volume){
  return volume * 16;
}

var userInput = prompt ("Let's Find Out How Many Gallons You Have By Entering The Amount of Quarts You Have:")

alert ("You Have This Many Gallons: " + quartsToGallons(userInput));
