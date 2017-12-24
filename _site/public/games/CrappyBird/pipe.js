function Pipe() {
    this.gap = jump_window; // Gap between the top and bottom pipe is twice this value
    this.mid = floor(random(height/4, 3 * height/4));
    this.topHeight = this.mid-this.gap;
    this.bottomHeight = height-this.mid-this.gap;

    this.x = width;
    this.w = 72;    // Width of the pipe
    this.speed = 2; // Scrolling speed

    this.show = function() {
        // Top pipe
        image(im_pipe_body, this.x, 0, this.w, this.topHeight-34);
        image(im_pipe_head_flipped, this.x, this.topHeight-34);

        // Bottom pipe
        image(im_pipe_head, this.x, height-this.bottomHeight);
        image(im_pipe_body, this.x, height-this.bottomHeight+34, this.w, this.bottomHeight-34);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        return (this.x < -this.w);
    }

    this.hits = function(character) {
        if (character.y < this.topHeight || character.y+character.h > height-this.bottomHeight) {
            if (character.x+character.w > this.x && character.x < this.x+this.w) {
                return true;
            }
        }
    }
}
