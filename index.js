
const rndInt = Math.floor(Math.random() * (6 - 1 + 1) + 1);

const rndInt2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);



var randomImage = "dice" + rndInt + ".png";

var randomImage2 = "dice" + rndInt2 + ".png";


var source = "images/" + randomImage;


var source2 = "images/" + randomImage2;



var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", source);


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", source2);

if(rndInt > rndInt2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (rndInt == rndInt2){
document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}else if(rndInt2>rndInt){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
