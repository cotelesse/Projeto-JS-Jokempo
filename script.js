const result = document.querySelector('.result')
const humanPoint = document.querySelector('#human-point')
const machinePoint = document.querySelector('#machine-point')
const reset = document.querySelector('.reset')
const mode = document.querySelector('.mode-selection')

let humanScore = 0
let machineScore = 0
let totalRodadas = 0;
let rodadasJogadas = 0;
let jogoAtivo = false;

const selecionarModo = (rodadas) => {
    totalRodadas = rodadas
    rodadasJogadas = 0
    jogoAtivo = true

    mode.style.display = 'none';
    result.innerHTML = `Modo selecionado: Melhor de ${rodadas}. Boa sorte!`;
}

const humanPlay = (humanChoice) => {

    if (!jogoAtivo) {
        result.innerHTML = 'Selecione um modo de jogo primeiro!';
        return
    }
    starTheGame(humanChoice, machinePlay())
}

const machinePlay = () => {
    const machineChoice = ['paper', 'scissors', 'rock']
    const randomNumber = Math.floor((Math.random() * 3))


    return machineChoice[randomNumber]
}

const starTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Máquina: ' + machine)
    rodadasJogadas++

    let rodadaResultado = '';

    if (human === machine) {
        rodadaResultado = 'Deu empate'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScore++
        humanPoint.innerHTML = humanScore
        rodadaResultado = 'Você ganhou'
    } else {
        machineScore++
        machinePoint.innerHTML = machineScore
        rodadaResultado = 'Você perdeu, IA vencedora'
    }

    if (humanScore === totalRodadas || machineScore === totalRodadas) {
        jogoAtivo = false;
        result.innerHTML = `<br><strong>Fim de jogo! ${humanScore > machineScore ? 'Você venceu 🎉' : 'A IA venceu 🤖'}</strong>`;
    } else {
        result.innerHTML = rodadaResultado;
}}


reset.addEventListener('click', () => {
    humanScore = 0
    machineScore = 0
    rodadasJogadas = 0
    jogoAtivo = false
    humanPoint.innerHTML = 0
    machinePoint.innerHTML = 0
    result.innerHTML = ''
    mode.style.display = 'flex'

    document.querySelectorAll('button').forEach(btn => {
        btn.disabled = false;
    });
});



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