const result = document.querySelector('.result')
const humanPoint = document.querySelector('#human-point')
const machinePoint = document.querySelector('#machine-point')

let humanScore = 0
let machineScore = 0

const humanPlay = (humanChoice) => {

    starTheGame(humanChoice, machinePlay())
}

const machinePlay = () => {
    const machineChoice = ['paper', 'scissors', 'rock']
    const randomNumber = Math.floor((Math.random() * 3))


    return machineChoice[randomNumber]
}

const starTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScore++
        humanPoint.innerHTML = humanScore
        result.innerHTML = 'Você ganhou'
    } else {
        machineScore++
        machinePoint.innerHTML = machineScore
        result.innerHTML = 'Você perdeu, IA vencedora'
    }
}





const imagens = [
    'https://picsum.photos/id/1015/1600/900',
    'https://picsum.photos/id/1025/1600/900',
    'https://picsum.photos/id/1035/1600/900',
    'https://picsum.photos/id/1045/1600/900'
];

let indiceAtual = 0;

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.body.style.backgroundImage = `url(${imagens[indiceAtual]})`;
    document.body.style.backgroundSize = 'cover';
}, 5000);