Food = function() {
    this.x = (floor(random(width)/Scale) * Scale);
    this.y = (floor(random(height)/Scale) * Scale);
    this.y = constrain(this.y, bannerH, height-Scale);

    this.pickLocation = function() {
        this.x = (floor(random(width)/Scale) * Scale);
        this.y = (floor(random(height)/Scale) * Scale);
        this.y = constrain(this.y, bannerH, height-Scale);
    }

    this.show = function() {
        fill(250, 99, 116)
        rect(this.x, this.y, Scale, Scale);
    }
}
