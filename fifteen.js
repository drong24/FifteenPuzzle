
let idName = "";
let num1 = 1;
let num2 = 1;

window.onload = function() {
   let squares = document.getElementById("puzzlearea").children;
   for (let i = 0; i < squares.length; i++) {
        idName = "square_" + num1 + "_" + num2;
        squares[i].setAttribute('id', idName);
        squares[i].classList.add("piece_" + (i + 1));
        if (num2 < 4) {
            num2++;
        }
        else {
            num1++;
            num2 = 1;
        }
        $(idName).addEventListener("click", move);
        $("shufflebutton").addEventListener("click", shuffleSquares);
   }
    // sets current empty row and column
    num1 = 4;
    num2 = 4;
}

// checks if move is valid and moves piece if valid
function move() {
    let temp1 = parseInt(this.id.substring(7, 8));
    let temp2 = parseInt(this.id.substring(9));
    let near = checkNearby(temp1, temp2);
    if (near) {
        this.id = "square_" + num1 + "_" + num2; 
        num1 = temp1;
        num2 = temp2;
    }
}

// checks whether or not provided piece is valid to move to empty position
function checkNearby(pos1, pos2) {
    if (pos1 - num1 == 0) {
        if (pos2 - num2 == 1 || pos2 - num2 == -1) {
            return true;
        }
    }
    if (pos2 - num2 == 0) {
        if (pos1 - num1 == 1 || pos1 - num1 == -1) {
            return true;
        }
    }
    return false;
}

// shuffles puzzle on click of shuffle button
function shuffleSquares () {
    let ran1, ran2;
    let shuffleAmount = Math.random() * 800;
    for (let i = 0; i < shuffleAmount; i++) {
        ran1 = Math.ceil(Math.random() * 4);
        ran2 = Math.ceil(Math.random() * 4);
        // if valid move, shifts div to empty position
        if (checkNearby(ran1, ran2)) {
            document.getElementById("square_" + ran1 + "_" + ran2).id = "square_" + num1 + "_" + num2; 
            num1 = ran1;
            num2 = ran2;
            
        }
        
    }
}