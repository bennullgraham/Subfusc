var Colour = function(r, g, b) {
    if (typeof r === 'undefined') {
        this.r = null;
        this.g = null;
        this.b = null;
    }
    else if (typeof r === 'number') {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    else {
        this.r = r.r;
        this.g = r.g;
        this.b = r.b;
    }
};
Colour.prototype = {
    r: null,
    g: null,
    b: null,

    add: function(other_rgb) {
        if (!other_rgb.defined()) {
            other_rgb = new Colour(0, 0, 0);
        }
        if (!this.defined()) {
            return other_rgb;
        }
        return new Colour(
            this.r + other_rgb.r,
            this.g + other_rgb.g,
            this.b + other_rgb.b
        );
    },
    multiply: function(multiplicand) {
        if (!this.defined()) {
            return new Colour(0, 0, 0);
        }
        return new Colour(
            this.r * multiplicand,
            this.g * multiplicand,
            this.b * multiplicand
        );
    },
    subtract: function(other_rgb) {
        return this.add(other_rgb.multiply(-1));
    },
    divide: function(divisor) {
        return this.multiply(1 / divisor);
    },
    css: function() {
        var r = Math.floor(this.r),
            g = Math.floor(this.g),
            b = Math.floor(this.b);
        return "rgb("+r+","+g+","+b+")";
    },
    defined: function() {
        return this.r !== null;
    }
};