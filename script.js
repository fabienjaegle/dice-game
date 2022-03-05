const GOAL_SCORE = 100;
const PLAYER_1 = 'Player 1';
const PLAYER_2 = 'Player 2';

init();

function init() {
    document.getElementById('goal').textContent = GOAL_SCORE;

    document.querySelector('#name-1').textContent = PLAYER_1;
    document.querySelector('#name-2').textContent = PLAYER_2;

    document.getElementById('lost-round').style.display = 'none';
}