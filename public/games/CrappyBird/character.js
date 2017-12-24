function Character() {
    // Character properties
    this.w = 64;
    this.h = 64;
    this.y = floor(height/2) - floor(this.h/2);
    this.x = floor(width/2) - floor(this.w/2);

    // Game mechanics
    this.gravity  = 0.4;
    this.velocity = 0;
    this.lift     = -10;

    this.show = function() {
        if (isDead === false) {
            image(im_character, this.x, this.y);
        } else {
            image(im_character_dead, this.x, this.y);
        }
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (isDead === false) {
            this.y = constrain(this.y, 0, height-this.h);
        } else {
            this.y = constrain(this.y, 0, height);
        }

        if (this.y === height-this.h) {
            this.velocity = 0;
        }
    }

    this.up = function() {
        this.velocity += this.lift;
        this.velocity = constrain(this.velocity, this.lift, 0);
    }
}
