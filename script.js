let randomNumber = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector(".guesses");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

let guessCount = 1;

let resetButton;

function CheckGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Предыдущие попытки: ";
    }
    guesses.textContent += userGuess + " ";    

    if(userGuess === randomNumber){
        lastResult.textContent = "Ого! Вы угадали число";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
    }
    else if(guessCount === 10){
        lastResult.textContent = "Игра окончена!";
    }else{
        lastResult.textContent = "Неправильно";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHigh.textContent = "Ваше число меньше загаданного";
        }
        else{
            lowOrHigh.textContent = "Ваше число больше загаданного";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", CheckGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Начать новую игру";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    let guessCount = 1;
    let result = document.querySelectorAll(".result");
    for(let i = 0; i < result.length; i++){
        result[i].textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessSubmit.disabled = false;
    guessField.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random()*100)+1;
}

