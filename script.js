'use strict';
const rand = () => Math.floor(Math.random() * 20) + 1;
let randNum = rand();
console.log(randNum);
let score = 100;
let highScore = 0;
const displayMess = message => {
    document.querySelector('.message').textContent = message;
}
const ChecButton = document.querySelector('.check');
ChecButton.addEventListener('click', () => {
    let input = document.querySelector('.guess').value;
    if (score === 0) {
        return;
    }
    if (input === '') {
        displayMess('Please enter a numbers');
    } else if (Number(input) > randNum) {
        displayMess('Higher than right number');
        document.querySelector('.score').textContent = score - 5;
        score -= 5;
        if (score === 0) {
            displayMess('You lose. Please try again!');
        }
    } else if (Number(input) < randNum) {
        displayMess('Lower than right number');
        document.querySelector('.score').textContent = score - 5;
        score -= 5;
        if (score === 0) {
            displayMess('You lose. Please try again!');
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } else {
        displayMess('You guessed the right number');
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('.number').textContent = randNum;
        document.querySelector('body').style.backgroundColor = 'green';
    }

    const again = document.querySelector('.again');
    again.addEventListener('click', () => {
        let msg = document.querySelector('.message').textContent = 'Start guessing...';
        let number = document.querySelector('.number').textContent = '?';
        let guessNum = document.querySelector('.guess');
        guessNum.value = guessNum.defaultValue;
        score = 100;
        let sc = document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
        randNum = rand();
        console.log(randNum);
    })
})