const GOAL_SCORE = 100;
const PLAYER_1 = 'Player 1';
const PLAYER_2 = 'Player 2';

var scores, currentPlayer, currentPlayerIndex, roundScore, isPlaying;

init();

function init() {
    scores = [0, 0];
    players = [PLAYER_1, PLAYER_2];
    currentPlayer = 1;
    currentPlayerIndex = 0;
    roundScore = 0;
    isPlaying = true;

    document.getElementById('dice').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.getElementById('goal').textContent = GOAL_SCORE;

    document.getElementById('name-1').textContent = PLAYER_1;
    document.getElementById('name-2').textContent = PLAYER_2;

    document.getElementById('winner-1').style.display = 'none';
    document.getElementById('winner-2').style.display = 'none';
    document.querySelector('.player-1-panel').classList.remove('bg-light');
    document.querySelector('.player-2-panel').classList.remove('bg-light');
    document.querySelector('.player-1-panel').classList.add('bg-light');
    document.querySelector('.dot-1').classList.remove('active');
    document.querySelector('.dot-2').classList.remove('active');
    document.querySelector('.dot-1').classList.add('active');

    document.getElementById('game-buttons').style.display = 'block';

    document.getElementById('lost-round').style.display = 'none';
}

function rollDice() {
    if (isPlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        document.getElementById('lost-round').style.display = 'none';

        document.getElementById('dice').style.display = 'inline-block';
        document.getElementById('dice').src = 'img/dice-' + dice + '.png';

        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else {
            document.getElementById('current-player').textContent = players[currentPlayerIndex];
            document.getElementById('lost-round').style.display = 'block';
            
            nextPlayer();
        }
    }
}

function nextPlayer() {
    currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
    currentPlayerIndex === 0 ? currentPlayerIndex = 1 : currentPlayerIndex = 0;
    roundScore = 0;

    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.querySelector('.player-1-panel').classList.toggle('bg-light');
    document.querySelector('.player-2-panel').classList.toggle('bg-light');

    document.querySelector('.dot-1').classList.toggle('active');
    document.querySelector('.dot-2').classList.toggle('active');

    document.getElementById('dice').style.display = 'none';
}

function hold() {
    if (isPlaying) {
        //add current score to the global score
        scores[currentPlayerIndex] += roundScore;

        //Update the UI
        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayerIndex];

        // check if player win the game
        if (scores[currentPlayerIndex] >= GOAL_SCORE) {
            document.getElementById('winner-' + currentPlayer).style.display = 'block';
            document.getElementById('dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('bg-light');
            document.getElementById('game-buttons').style.display = 'none';
            isPlaying = false;
        } else {
            nextPlayer();
        }
    }
}

function newGame() {
    init();
}