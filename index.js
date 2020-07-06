var a=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// Left Dice
var randomNumber1 = Math.floor(Math.random()*6);
console.log("Random number 1 = " , randomNumber1);
document.querySelectorAll("img")[0].setAttribute("src",a[randomNumber1]);

//Right Dice
var randomNumber2 = Math.floor(Math.random()*6);
console.log("Random number 2 = " , randomNumber2);
document.querySelectorAll("img")[1].setAttribute("src",a[randomNumber2]);

function winner(){
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
  }
  else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!"
  }
}

winner();
