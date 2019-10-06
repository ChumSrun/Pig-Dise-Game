const dice = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollDice = document.getElementById("rollDice");
const keep = document.getElementById("keep");
const player2 = document.getElementById("player2");
const player1 = document.getElementById("player1");
const currentScoreP1Text = document.getElementById("currentScoreP1");
const currentScoreP2Text = document.getElementById("currentScoreP2");
const scoreP1Text = document.getElementById("scoreP1");
const scoreP2Text = document.getElementById("scoreP2");
const finalScoreText = document.getElementById("finalScore");

const pathDiscImg = "./assets/image/dice-";
const numberOfImg = [1, 2, 3, 4, 5, 6];
const sourceImg = numberOfImg.map(value => `${pathDiscImg}${value}.png`);

const randNum = (min, max) => {
    return Math.floor(Math.random() * max - min + 1) + min;
}


let sumRollScore = 0;
let sumRollScore2 = 0;
let PlayerTurn = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let finalScore = 100;
let previousScore = 0;
const changeDiscImg = () => {
    dice.style.display = "block"
    dice2.style.display = "block"
    let ranNum1 = randNum(1, 6);
    let ranNum2 = randNum(1, 6);

    if (ranNum1 != 1 && ranNum1 !== previousScore) {
        sumRollScore += ranNum1;
        sumRollScore2 += ranNum2;
        dice.src = sourceImg[ranNum1 - 1];
        dice2.src = sourceImg[ranNum2 - 1];
        if (ranNum1 == 6) {
            previousScore = ranNum1;
        } else {
            previousScore = 0;
        }
        console.log(previousScore);
    } else {
        dice.style.display = "none"
        if (PlayerTurn === 0) {
            player1.style.border = "none";
            player2.style.border = "1px solid red";
            currentScoreP1Text.innerHTML = 0;
        } else {
            player2.style.border = "none";
            player1.style.border = "1px solid red";
            currentScoreP2Text.innerHTML = 0;
        }
        (PlayerTurn == 0) ? PlayerTurn = 1: PlayerTurn = 0;
        sumRollScore = 0;
        sumRollScore2 = 0;
    }
    (PlayerTurn === 0) ? currentScoreP1Text.innerHTML = sumRollScore + sumRollScore2: currentScoreP2Text.innerHTML = sumRollScore + sumRollScore2;

}

rollDice.addEventListener("click", changeDiscImg)

keep.addEventListener("click", () => {

    if (PlayerTurn === 0) {
        player1.style.border = "none";
        player2.style.border = "1px solid red";
        currentScoreP1Text.innerHTML = 0;
        scoreP1 += sumRollScore + sumRollScore2;
        scoreP1Text.innerText = scoreP1;
        PlayerTurn = 1;
        Winner();
    } else {
        player2.style.border = "none";
        player1.style.border = "1px solid red";
        currentScoreP2Text.innerHTML = 0;
        scoreP2 += sumRollScore + sumRollScore2;
        scoreP2Text.innerText = scoreP2;
        PlayerTurn = 0;
        Winner()
    }
    sumRollScore = 0;
    sumRollScore2 = 0;
})


finalScoreText.addEventListener("keyup", () => {
    finalScore = finalScoreText.value;
})

function Winner() {
    if (finalScore <= scoreP2 || finalScore <= scoreP1) {
        (finalScore <= scoreP1) ? player1.innerText = "Winner": player2.innerText = "Winner"
    }
}
document.getElementById("newGame").addEventListener("click", () => {
    init();
})

function init() {
    player1.innerText = "Player1";
    player2.innerText = "Player2";
    sumRollScore = 0;
    scoreP2 = 0;
    scoreP1 = 0;
    currentScoreP2Text.innerHTML = 0;
    currentScoreP1Text.innerHTML = 0;
    scoreP2Text.innerHTML = 0;
    scoreP1Text.innerHTML = 0;
}