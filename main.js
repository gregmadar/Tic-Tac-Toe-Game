let cells = document.querySelectorAll('.square');
let topLeft = document.querySelector('.tl');
let topMiddle = document.querySelector('.tm');
let topRight = document.querySelector('.tr');
let middleLeft = document.querySelector('.ml');
let middleMiddle = document.querySelector('.mm');
let middleRight = document.querySelector('.mr');
let bottomLeft = document.querySelector('.bl');
let bottomMiddle = document.querySelector('.bm');
let bottomRight = document.querySelector('.br');

let xTurn = true;

function hover(event) {
    if (xTurn === true) {
        event.target.innerHTML = "X";
    }
    else {
        event.target.innerHTML = "O";
    }
    event.target.style.color = 'lightgrey';
    event.target.style.fontSize = '90px';
    event.target.style.fontFamily = 'sans-serif';
    event.target.style.fontWeight = 'bolder';
}

function returnBack(event) {
    event.target.innerHTML = "";
}

function refresh(event) {
    document.location.reload(true);
}

function replayHover(event) {
    event.target.style.backgroundColor = 'midnightblue';
    event.target.style.color = 'white';
}

function releaseHover(event) {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
}

document.getElementById('replayButton').addEventListener('click', refresh);
document.getElementById('replayButton').addEventListener('mouseover', replayHover);
document.getElementById('replayButton').addEventListener('mouseout', releaseHover);

function placeMark(event) {
    if (xTurn === true) {
        event.target.innerHTML = "X";
    }
    else {
        event.target.innerHTML = "O";
    }
    event.target.style.color = 'black';
    event.target.style.fontSize = '90px';
    event.target.style.fontFamily = 'sans-serif';
    event.target.style.fontWeight = 'bolder';
    event.target.style.cursor = 'not-allowed';
    event.target.removeEventListener('mouseout', returnBack)
    event.target.removeEventListener('mouseover', hover);
    event.target.removeEventListener('click', placeMark);
    xTurn = !xTurn;
    let symbol;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            symbol = "X";
        }
        else {
            symbol = "O"
        }

        if (topLeft.innerHTML === symbol && topMiddle.innerHTML === symbol && topRight.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (middleLeft.innerHTML === symbol && middleMiddle.innerHTML === symbol && middleRight.innerHTML === symbol){
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (bottomLeft.innerHTML === symbol && bottomMiddle.innerHTML === symbol && bottomRight.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (topLeft.innerHTML === symbol && middleLeft.innerHTML === symbol && bottomLeft.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (topMiddle.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomMiddle.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (topRight.innerHTML === symbol && middleRight.innerHTML === symbol && bottomRight.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (topLeft.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomRight.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
        else if (topRight.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomLeft.innerHTML === symbol) {
            document.getElementById('message').style.display = 'grid';
            document.getElementById('win-header').innerHTML = `Congrats ${symbol}'s! You Won!`;
        }
    }
    let count = 0;
    cells.forEach(item => {
        if (item.innerHTML === 'X' || item.innerHTML === 'O') {
            count += 1;
        }
    });
    if (count === 9) {
        document.getElementById('message').style.display = 'grid';
        document.getElementById('win-header').innerHTML = 'Draw!';
    }
}

cells.forEach(item => {
    item.addEventListener('mouseover', hover);
    item.addEventListener('mouseout', returnBack);
    item.addEventListener('click', placeMark)
});
