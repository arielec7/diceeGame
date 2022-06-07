
//Dice 1
var random1 = Math.floor(Math.random() * 6) + 1;
var imagePath = "images/dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagePath);

//Dice 2
var random2 = Math.floor(Math.random() * 6) + 1;
var imagePath2 = "images/dice" + random2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagePath2);

//sort
if (random1 > random2) {
  document.querySelector("h1").innerHTML = "😍 Play 1 Wins!";
}else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 😍";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
