function Clouds() {
    this.y = floor(random(height));
    this.x = width;

    this.w = 400;       // Width of the clouds
    this.speed = 0.5;   // Scrolling speed

    this.show = function() {
        image(im_clouds, this.x, this.y);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        return (this.x < -this.w);
    }
}
