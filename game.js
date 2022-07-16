let gameArr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let resetButton = document.querySelector('.reset');

const gameBoard = (() => {
    let gameDiv = document.querySelector('.gameBoard');
    let winner = document.querySelector('.winner');
    let gameReset = document.querySelector('.resetGame');
    let turn = 1;

    const player = (name, sign, turn) => {
        return {
            name,
            sign,
            turn
        };
    }

    const append = (arr) => {
        arr.forEach((elem, ind) => {
            elem.forEach((ele, ex) => {
                let newPara = document.createElement('p');
                newPara.setAttribute('data-Array', `${ind},${ex}`);
                newPara.textContent = ele;
                gameDiv.append(newPara);
            })
        })
    }

    const game = () => {
        gameReset.classList.remove('active');
        gameDiv.style.pointerEvents = 'auto';
        let playerTurn = document.querySelector('.playerTurn');
        paraElem.forEach((elem, index) => {
            let player1 = gameBoard.player("ali", "x", true);
            let player2 = gameBoard.player('usama', 'o', false);
            playerTurn.innerHTML = `<h2 class="turn">Player ${(player1.sign).toUpperCase()}'s turn.</h2>`;
            elem.addEventListener('click', () => {
                let elemIndex = elem.getAttribute('data-Array').split(',');
                if (elem.innerHTML != "") return;
                if (turn % 2 == 1) {
                    playerTurn.innerHTML = '';
                    playerTurn.innerHTML = `<h2 class="turn">Player ${(player2.sign).toUpperCase()}'s turn.</h2>`;
                    gameArr[elemIndex[0]][elemIndex[1]] = player1.sign;
                    elem.innerHTML += '<i class="fa-solid fa-check fa-2x"></i>';
                    turn++;
                } else {
                    playerTurn.innerHTML = '';
                    playerTurn.innerHTML = `<h2 class="turn">Player ${(player1.sign).toUpperCase()}'s turn.</h2>`;
                    gameArr[elemIndex[0]][elemIndex[1]] = player2.sign;
                    elem.innerHTML += '<i class="fa-regular fa-circle fa-2x"></i>';
                    turn++;
                }
                winning();
            });
        });
    }

    const winning = () => {
        if (gameArr[0][0] == gameArr[0][1] &&
            gameArr[0][1] == gameArr[0][2] &&
            gameArr[0][0] != '' && gameArr[0][1] != '' && gameArr[0][2] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][0]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[1][0] == gameArr[1][1] &&
            gameArr[1][1] == gameArr[1][2] &&
            gameArr[1][0] != '' && gameArr[1][1] != '' && gameArr[1][2] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[1][0]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[2][0] == gameArr[2][1] &&
            gameArr[2][1] == gameArr[2][2] &&
            gameArr[2][0] != '' && gameArr[2][1] != '' && gameArr[2][2] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[2][0]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[0][0] == gameArr[1][0] &&
            gameArr[1][0] == gameArr[2][0] &&
            gameArr[0][0] != '' && gameArr[1][0] != '' && gameArr[2][0] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][0]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[0][1] == gameArr[1][1] &&
            gameArr[1][1] == gameArr[2][1] &&
            gameArr[0][1] != '' && gameArr[1][1] != '' && gameArr[2][1] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][1]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[0][2] == gameArr[1][2] &&
            gameArr[1][2] == gameArr[2][2] &&
            gameArr[0][2] != '' && gameArr[1][2] != '' && gameArr[2][2] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][2]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[0][2] == gameArr[1][1] &&
            gameArr[1][1] == gameArr[2][0] &&
            gameArr[0][2] != '' && gameArr[1][1] != '' && gameArr[2][0] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][2]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else if (gameArr[0][0] == gameArr[1][1] &&
            gameArr[1][1] == gameArr[2][2] &&
            gameArr[0][0] != '' && gameArr[1][1] != '' && gameArr[2][2] != '') {
            winner.innerHTML = '';
            winner.innerHTML = `<p>Player ${(gameArr[0][0]).toUpperCase()} has won.</p>`;
            gameReset.classList.add('active');
            gameDiv.style.pointerEvents = 'none';
        } else {
            if (turn == 10) {
                winner.innerHTML = '';
                winner.innerHTML = `<p>The game is a tie.</p>`;
                gameReset.classList.add('active');
                gameDiv.style.pointerEvents = 'none';
            }
        }
    }

    let resetGame = () => {
        turn = 1;
        gameArr = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        paraElem.forEach((elem) => {
            elem.textContent = '';
        })
        game();
    }
    return {
        player,
        append,
        game,
        winning,
        resetGame
    };
})();
gameBoard.append(gameArr);
let paraElem = document.querySelectorAll('.gameBoard>p');
gameBoard.game();
resetButton.addEventListener('click', () => gameBoard.resetGame());