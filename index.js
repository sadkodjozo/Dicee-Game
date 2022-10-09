
document.querySelector("button").addEventListener('click',rollDice);

function rollDice(){

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var heading = document.querySelector(".big-head");


document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
console.log(randomNumber1);

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
console.log(randomNumber2);


if (randomNumber1>randomNumber2) {
    heading.textContent = "🚩 Winner is Player 1 ";
}else if (randomNumber2>randomNumber1) {
    heading.textContent = "Winner is Player 2 🚩"
} else  { 
    heading.textContent ="It's a tie! 🤝";
}

}


