let pits = document.querySelectorAll('.pit');
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let stones = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

// Initialize pits with stones
for (let i = 0; i < pits.length; i++) {
    pits[i].innerHTML = stones[i];
}

// Add event listeners to pits
for (let i = 0; i < pits.length; i++) {
    pits[i].addEventListener('click', () => {
        if (currentPlayer === 1 && i < 6) {
            sowStones(i);
        } else if (currentPlayer === 2 && i >= 6) {
            sowStones(i);
        }
    });
}

function sowStones(index) {
    let stonesToSow = stones[index];
    stones[index] = 0;
    pits[index].innerHTML = stones[index];

    while (stonesToSow > 0) {
        index = (index + 1) % 12;
        stones[index]++;
        pits[index].innerHTML = stones[index];
        stonesToSow--;
    }

    // Update score
    if (currentPlayer === 1 && index >= 6) {
        player1Score += stones[index];
        document.getElementById('player1-score').innerHTML = player1Score;
        stones[index] = 0;
        pits[index].innerHTML = stones[index];
    } else if (currentPlayer === 2 && index < 6) {
        player2Score += stones[index];
        document.getElementById('player2-score').innerHTML = player2Score;
        stones[index] = 0;
        pits[index].innerHTML = stones[index];
    }

    // Switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}
