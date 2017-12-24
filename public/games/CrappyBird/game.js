var character;
var pipes = [];
var jump_window = 112;
var level = 0;
var clouds = [];
var score = 0;
var isDead = false;
var isStarted = false;
var im_bg;
var im_character;
var im_character_dead;
var im_pipe_body;
var im_pipe_head;
var im_pipe_head_flipped;
var im_clouds;
var font;

function preload() {
    im_bg = loadImage('assets/bg_400x600.png');
    im_character = loadImage('assets/bird_64x64.png');
    im_character_dead = loadImage('assets/bird_dead_64x64.png');
    im_pipe_body = loadImage('assets/pipe_body_72x6.png');
    im_pipe_head = loadImage('assets/pipe_head_72x34.png');
    im_pipe_head_flipped = loadImage('assets/pipe_head_flipped_72x34.png');
    im_clouds = loadImage('assets/clouds_400x140.png');
    font = loadFont('assets/8-bit.ttf');
}

function setup() {
    createCanvas(400, 600);
    frameRate(60);

    clouds.push(new Clouds());
    pipes.push(new Pipe());
    character = new Character();

    noLoop();
}

function draw() {
    // The character passes one pipe after every 120 frames
    if (frameCount % 120 === 0 && isDead === false) {
        score++;
    }

    // Advance to next level
    if (score !== 0 && score % 16 === 0) {
        level++;
        level = constrain(level, 0, 2);

        jump_window -= 16;
        jump_window = constrain(jump_window, 80, 112);
    }

    background(im_bg);

    // Create a new clouds after every 900 frames
    if (frameCount % 900 === 0) {
        clouds.push(new Clouds());
    }

    for (var i = clouds.length-1 ; i >= 0 ; i--) {
        clouds[i].update();
        clouds[i].show();

        // Remove clouds from array when offscreen
        if (clouds[i].offscreen()) {
            clouds.splice(i, 1);
        }
    }

    // Create a new pipe after every 120 frames
    if (frameCount % 120 === 0) {
        pipes.push(new Pipe());
    }

    for (var i = pipes.length-1 ; i >= 0 ; i--) {
        if (isDead === false) {
            pipes[i].update();
        }
        pipes[i].show();

        // Check if the character hits the pipes
        if (pipes[i].hits(character)) {
            isDead = true;
        }

        // Remove pipe from array when offscreen
        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    character.update();
    character.show();

    textSize(60);
    textStyle(BOLD);
    textFont(font);
    textAlign(CENTER);
    fill(255);
    text(score, floor(width/2), floor(height/8));

    if (isDead === true) {
        textSize(120);
        fill(255, 255, 35);
        text('BOO', floor(width/2), floor(height/2 - 60));
        textSize(40);
        text('hit < F5 > to replay', floor(width/2), floor(height/2 + 80));
    }

    if (isStarted === false) {
        textSize(60);
        fill(255, 255, 35);
        text('GET READY', floor(width/2), floor(height/2 - 60));
        textSize(40);
        text('hit < spacebar >\nor < left click > / < tap >', floor(width/2), floor(height/2 + 80));
    }
}

function keyPressed() {
    if (key === ' ' && isDead === false) {
        if (isStarted === false) {
            isStarted = true;
            loop();
        }
        character.up();
    }
}

function touchStarted() {
    if (isDead === false) {
        if (isStarted === false) {
            isStarted = true;
            loop();
        }
        character.up();
    }
}
