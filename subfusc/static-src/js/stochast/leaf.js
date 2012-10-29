var Leaf = function(x, y) {
    this.x = x;
    this.y = y;
    this.colour = new FadableColour();
    this.sample_ratio = 0;
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
        var maxDisplace = 0.05;
        displace = (Math.random() * maxDisplace * 2) - maxDisplace;
        target = Gradient.at(this.sample_ratio + displace);
        this.colour.to(target, 15);
    },

    ratio: function(ratio) {
        if (typeof ratio !== 'undefined') {
            this.sample_ratio = ratio;
        }
        return this.sample_ratio;
    }

};