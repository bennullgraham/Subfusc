var Gradient = {
    palettes: {
        'purple': [
            [72,  72,  150],
            [150, 116,  147]
        ]
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
        var left = this.stops[0].rgb();
        var right = this.stops[1].rgb();
        var r = Math.floor(((1 - ratio) * left[0]) + (ratio * right[0]));
        var g = Math.floor(((1 - ratio) * left[1]) + (ratio * right[1]));
        var b = Math.floor(((1 - ratio) * left[2]) + (ratio * right[2]));
        return [r, g, b];
    },
    palette: function(palette, immediate) {
        steps = immediate ? 1 : 200;
        var left = this.palettes[palette][0];
        var right = this.palettes[palette][1];
        this.stops[0].to(left, steps);
        this.stops[1].to(right, steps);
        return this;
    },
    step: function() {
        this.stops[0].step();
        this.stops[1].step();
    }
};