let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Пожалуйста, введите число между ${min} и ${max}`, 'red');
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} правильно, ВЫ ВЫИГРЫВАЕТЕ!`);

    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Игра окончена, вы проиграли. Правильное число было ${winningNum}`);
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';

            setMessage(`${guess} неверно, У вас есть ${guessesLeft} попытки`, 'red');
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Играть еще раз';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

