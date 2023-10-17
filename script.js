'use strict';
//Selecting element

// const score0EL = document.querySelector('#score--0');
// const score1EL = document.getElementById('score--1');
// const current0EL = document.getElementById('current--0');
// const current1EL = document.getElementById('current--1');
// const diceEL = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const player0EL = document.querySelector('.player--0');
// const player1EL = document.querySelector('.player--1');

// let scores, current_score, active_player, playing;

// const init = function() {
    
//     scores = [0, 0];
//     current_score = 0;
//     active_player = 0;
//     playing = true;

//     score0EL.textContent = 0;
//     score1EL.textContent = 0;
//     current0EL.textContent = 0;
//     current1EL.textContent = 0;

//     diceEL.classList.add('hidden');
//     player0EL.classList.remove('player--winner');
//     player1EL.classList.remove('player--winner');
//     player0EL.classList.add('player--active');
//     player1EL.classList.remove('player--active');
// }

// init();

// const switchPlayer = function() {
//     document.getElementById(`current--${active_player}`).textContent = 0;
//         current_score = 0;
//         active_player = active_player === 0 ? 1: 0;
//         player0EL.classList.toggle('player--active');
//         player1EL.classList.toggle('player--active');
// };
// //Rolling dice functionality

// btnRoll.addEventListener('click', function() {
//     if (playing) {
//         //Generatting a random dice roll
//         const dice = Math.trunc((Math.random() * 6) + 1)
//         //Display dice
//         diceEL.classList.remove('hidden')
//         diceEL.src = `dice-${dice}.png`

//         //Check for the rooled 1: if then switch the other player
//         if (dice !==1) {
//             current_score+=dice;
//             document.getElementById(`current--${active_player}`).textContent = current_score;
//         } else {
//             switchPlayer();
//         }
//     }

// });

// btnHold.addEventListener('click', function() {
//     if (playing) {
//         scores[active_player] += current_score;
//         document.getElementById(`score--${active_player}`).textContent = scores[active_player];

//         if (scores[active_player] >= 50 ) {
//             playing = false;
//             diceEL.classList.add('hidden');
//             document.querySelector(`.player--${active_player}`).classList.add('player--winner');
//             document.querySelector(`.player--${active_player}`).classList.remove('player--active');
//         } else {
//             switchPlayer();
//         }
//     }   

// })

// btnNew.addEventListener('click', init);

const score0EL = document.querySelector('#score--0')
const score1EL = document.getElementById('score--1')
const diceEL = document.querySelector('.dice')
const newgameEL = document.querySelector('.btn--new')
const rolldiceEL = document.querySelector('.btn--roll')
const holdEL = document.querySelector('.btn--hold')
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const current0EL = document.getElementById('current--0')
const current1EL = document.getElementById('current--1')

let score, currentscore, active_player, playing

const init = function() {
    score = [0, 0];
    currentscore = 0;
    active_player = 0;
    playing = true;

    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEL.classList.add('hidden')

    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner')
    player0EL.classList.add('player--active')
    player1EL.classList.remove('player--active')

}

init()


const switchPlayer = function() {
    document.getElementById(`current--${active_player}`).textContent = 0;
    currentscore = 0;
    active_player = active_player===0 ? 1 : 0;
    player0EL.classList.toggle('player--active')
    player1EL.classList.toggle('player--active')
}

rolldiceEL.addEventListener('click', function() {
    if (playing) {
        const randomNumber = Math.trunc((Math.random() * 6) + 1)
        diceEL.classList.remove('hidden')
        diceEL.src = `dice-${randomNumber}.png`

        if (randomNumber !==1) {
            currentscore+=randomNumber
            document.getElementById(`current--${active_player}`).textContent = currentscore;
        } else {
            switchPlayer()
        }
    }
    
})


holdEL.addEventListener('click', function() {
    if (playing) {
        score[active_player]+=currentscore;
        document.getElementById(`score--${active_player}`).textContent = score[active_player];

        if (score[active_player] >= 50) {
            playing = false
            diceEL.classList.add('hidden')
            document.querySelector(`.player--${active_player}`).classList.add('player--winner')
            document.querySelector(`.player--${active_player}`).classList.remove('player--active')

        } else {
            switchPlayer()
        }
    }
    
})

newgameEL.addEventListener('click', init)
