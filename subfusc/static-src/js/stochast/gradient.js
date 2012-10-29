var Gradient = {
    palettes: {
        'purple': {
            'left': new Colour(72,  72,  150),
            'right': new Colour(150, 116, 147)
        }
    },
    stops: [
        new FadableColour(),
        new FadableColour()
    ],
    init: function() {
        this.palette('purple', true);
    },
    at: function(ratio) {
        ratio = Math.min(1, Math.max(0, ratio));
        var left = this.stops[0].current;
        var right = this.stops[1].current;
        return left.multiply((1 - ratio)).add(right.multiply(ratio));
    },
    palette: function(palette, immediate) {
        steps = immediate ? 1 : 200;
        var left = this.palettes[palette].left;
        var right = this.palettes[palette].right;
        this.stops[0].to(left, steps);
        this.stops[1].to(right, steps);
        return this;
    },
    step: function() {
        this.stops[0].step();
        this.stops[1].step();
    }
};