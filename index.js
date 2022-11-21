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
function startGame() {
    const sceneDiv = document.getElementById('container');
    const startButton = document.getElementById('startButton');
    const sceneImage = document.getElementById('sceneImage');
    startButton.textContent = "Starta spel";
    startButton.addEventListener('click', loadFirstScene);
}

function loadFirstScene() {
    document.getElementById('startButton').remove();
    document.getElementById('h1').remove();
    document.getElementById("sceneImage").src = "./images/driving.jpg";

    const textBox = document.createElement('div');
    textBox.innerHTML = "Du är på väg hem efter en lång arbetsdag. Plötsligt tänds en varningslampa på displayen och bilen blir allt svårare att köra. Du bestämmer dig för att stanna bilen åt sidan för att se vad felet är.";
    textBox.id = "sceneText"
    document.getElementById('container').append(textBox);

    const stopCar = document.createElement('button');
    stopCar.innerHTML = "Stanna bilen";
    stopCar.id = "stopCar"
    document.getElementById('container').append(stopCar);

}
