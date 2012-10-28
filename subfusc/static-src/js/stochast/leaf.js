var Leaf = function(x, y, maxWidth) {
    this.x = x;
    this.y = y;
    this.colour = new FadableColour();
    this.ratio = (x / maxWidth);
};
Leaf.prototype = {
    width: 10,
    height: 82,
    draw: function(canvas) {
        if (this.colour.defined()) {
            var context = canvas.getContext('2d');
            context.fillStyle = this.colour.step().css();
            context.fillRect(this.x, this.y, this.x + this.width, this.y + this.height);
        }
    },

    resettle: function() {
        var maxDisplace = 0.1;
        displace = (Math.random() * maxDisplace * 2) - maxDisplace;
        target = Gradient.at(this.ratio + displace);
        this.colour.to(target, 15);
    },

    ratio: function(ratio) {
        this.ratio = ratio ? ratio : this.ratio;
        return this.ratio;
    }

};