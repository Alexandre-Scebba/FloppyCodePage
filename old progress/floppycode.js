// game area
let gameArea;
let gameAreaWidth = 360;
let gameAreaHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;

let bird;

//physics
let velocityY = 0; //bird jump speed
let gravity = 0.1;

let gameOver = false;
let score = 0;

window.onload = function() {
    gameArea = document.getElementById("gameArea");
    gameArea.height = gameAreaHeight;
    gameArea.width = gameAreaWidth;
    context = gameArea.getContext("2d"); //used for drawing on the board

    let birdX = gameAreaWidth / 8;
    let birdY = gameAreaHeight / 2;

    bird = {
        x : birdX,
        y : birdY,
        width : birdWidth,
        height : birdHeight
    }

    //draw flappy bird
    context.fillStyle = "blue";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveBird); 
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, gameArea.width, gameArea.height);

    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y, limit the bird.y to top of the canvas
    context.fillRect(bird.x, bird.y, bird.width, bird.height);

    if (bird.y > gameArea.height) {
        gameOver = true;
    }
}

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp") {
        //jump
        velocityY = -6;
    }
}