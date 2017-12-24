var canvasWidth = 800;
var canvasHeight = 600;
var worldWidth = 1000;
var worldHeight = 1000;
ty = 0;
tx = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    testCharacter = new testCharacter();
}

function draw() {
    background(46, 204, 113);
    testCharacter.update(ty, tx);
    testCharacter.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        ty = -10;
        tx = 0;
    } else if (keyCode === DOWN_ARROW) {
        ty = +10;
        tx = 0;
    } else if (keyCode === LEFT_ARROW) {
        ty = 0;
        tx = -10;
    } else if (keyCode === RIGHT_ARROW) {
        ty = 0;
        tx = +10;
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        ty = 0;
        tx = 0;
    } else if (keyCode === DOWN_ARROW) {
        ty = 0;
        tx = 0;
    } else if (keyCode === LEFT_ARROW) {
        ty = 0;
        tx = 0;
    } else if (keyCode === RIGHT_ARROW) {
        ty = 0;
        tx = 0;
    }
}
