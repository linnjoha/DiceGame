let goalNumber = 1;
let throwCounter = 0;
let mainDice = document.getElementById("dice");
let previousResult = "";
let btn = document.querySelector("button");

const gameIsOver = () => {
  const gameOver = document.getElementById("game-over");
  gameOver.innerText = "Spelet är slut!";
  const result= document.getElementById('result');
  result.innerText= 'Du klarade spelet på '+throwCounter+ ' kast';
  btn.innerText = "Starta om";
  btn.removeEventListener("click", clicklistner);
  btn.addEventListener('click',() => {
    window.location.reload();
  });
};

const tossDice = () => {
  let diceNumber = Math.ceil(Math.random() * 6);

  mainDice.classList.remove(`dots-${previousResult}`);
  mainDice.classList.add(`dots-${diceNumber}`);
  previousResult = diceNumber;
  throwCounter++;
  btn.innerText = throwCounter + " kast";

  if (diceNumber === goalNumber && goalNumber < 7) {
    let topDice = document.querySelector(`header .dots-${goalNumber}`);
    topDice.classList.remove("faded");
    goalNumber++;
  }
  if (goalNumber === 7) {
    btn.innerText = "you did it";
    gameIsOver();
  }
};
let clicklistner = () => {
  tossDice();
};
btn.addEventListener("click", clicklistner);
