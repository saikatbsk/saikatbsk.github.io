Snake = function() {
    this.x = 0;
    this.y = bannerH;

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.total = 0;
    this.tail = [];

    this.isdead = function() {
        for (var i = 0 ; i < this.tail.length ; i++) {
            d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];

                return 1;
            }
        }
    }

    this.eats = function(food) {
        var d = dist(this.x, this.y, food.x, food.y);

        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.direction = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0 ; i < this.tail.length-1 ; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed*Scale;
        this.y = this.y + this.ySpeed*Scale;

        this.x = constrain(this.x, 0, width-Scale);
        this.y = constrain(this.y, bannerH, height-Scale);
    }

    this.show = function() {
        fill(207, 227, 116);
        for (var i = 0 ; i < this.tail.length ; i++) {
            rect(this.tail[i].x, this.tail[i].y, Scale, Scale);
        }
        rect(this.x, this.y, Scale, Scale);
    }
}
