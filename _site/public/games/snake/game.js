var snake;
var food;
var Scale = 12;
var fps = 6;
var bannerH = 60;
var score = 0;
var lives = 9;

function setup() {
    createCanvas(480, 480+bannerH);
    snake = new Snake();
    food = new Food();
    frameRate(fps);
}

function draw() {
    background(51, 51, 51);

    if (lives > 0) {
        if (snake.isdead()) {
            lives--;
        }
        snake.update();
        snake.show();
        if (snake.eats(food)) {
            score++;
            food.pickLocation();
        }
        food.show();

        stroke(48, 120, 168);
        fill(48, 120, 168);
        rect(0, 0, width, bannerH);

        fill(214, 216, 218);
        textSize(20);
        textFont('Monospace');
        textAlign(LEFT, CENTER);
        text('Score: ' + score, 20, floor(bannerH/2));
        textAlign(RIGHT, CENTER);
        text('Lives: ' + lives, width-20, floor(bannerH/2));

        stroke(0, 0, 0);
    }
    else {
        stroke(48, 120, 168);
        fill(214, 216, 218);
        textSize(60);
        textFont('Monospace');
        textAlign(CENTER, CENTER);
        text('GAME OVER', floor(width/2), floor(height/2)-60);
        textSize(20);
        text('Score: ' + score, floor(width/2), floor(height/2));
        textSize(34);
        text('< HIT SPACE >', floor(width/2), floor(height/2)+60);

        stroke(0, 0, 0);
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    } else if (lives === 0 && keyCode === 32) {
        lives = 9;
        setup();
    }
}
