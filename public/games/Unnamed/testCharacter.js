function testCharacter() {
    this.width = 40;
    this.height = 40;
    this.y = 50;
    this.x = 50;

    this.show = function() {
        fill(204, 101, 192, 127);
        stroke(127, 63, 120);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function(ty, tx) {
        this.y -= ty;
        this.x -= tx;
    }
}
