// Dice1

var randomNumber1 = Math.floor(Math.random() * 6);
randomNumber1++;

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;    //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//Dice 2

var randomNumber2 = Math.floor(Math.random() * 6);
randomNumber2++;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Result

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🚩 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h2").innerHTML = "🚩Draw!🚩";
}