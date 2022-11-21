window.addEventListener("DOMContentLoaded", main);

function main() {
    startGame();
}

/*
const audio = new Audio("./monster.wav");
		
function playAudio() {
    audio.play();
}
*/
const scene = document.getElementById('container');
function startGame() {
    const startButton = document.getElementById('startButton');
    startButton.textContent = "Starta spel";
    startButton.addEventListener('click', loadInputDiv);
}

function loadInputDiv() {
    document.body.innerHTML = "";
    const div = document.createElement('div');
    div.id = "containerNew"
    document.body.appendChild(div);

    const inputLabel = document.createElement('h2');
    inputLabel.textContent = "Detta spelet är läskigt och har en åldergräns!";
    inputLabel.id = "inputLabel"
    containerNew.appendChild(inputLabel);

    const inputP = document.createElement('p');
    inputP.textContent = "Du måste därför ange din ålder";
    inputP.id = "inputP"
    containerNew.appendChild(inputP);

    const userAge = document.createElement('input');
    userAge.id = "userAge"
    containerNew.appendChild(userAge);

    const submit = document.createElement('button');
    submit.textContent = "Jag är över 18 år!";
    submit.id = "submit"
    containerNew.appendChild(submit);
}