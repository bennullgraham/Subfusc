var FadableColour = function() {
    this.current = null;
    this.target = [0, 0, 0];
    this.distance = [0, 0, 0];
    this.steps = 0;
    this.maxSteps = 1;
};
FadableColour.prototype = {

    to: function(rgb, maxSteps) {
        if (this.current === null) {
            this.current = rgb;
        }
        else if (!this.fading()) {
            this.target = rgb;
            this.maxSteps = maxSteps || 10;
            this.steps = 0;
            this.distance[0] = (rgb[0] - this.current[0]);
            this.distance[1] = (rgb[1] - this.current[1]);
            this.distance[2] = (rgb[2] - this.current[2]);
        }
        return this;
    },
    step: function() {
        if (this.current === null) {
            return this;
        }
        if (this.fading()) {
            this.current[0] = this.current[0] + (this.distance[0] / this.maxSteps);
            this.current[1] = this.current[1] + (this.distance[1] / this.maxSteps);
            this.current[2] = this.current[2] + (this.distance[2] / this.maxSteps);
            this.steps++;
        } else {
            this.steps = 0;
            this.maxSteps = 0;
        }
        return this;
    },
    css: function() {
        rgb = this.rgb();
        return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
    },
    rgb: function() {
        return [
            Math.floor(this.current[0]),
            Math.floor(this.current[1]),
            Math.floor(this.current[2])
        ];
    },
    fading: function() {
        return (this.maxSteps > 0 && this.steps < this.maxSteps);
    },
    defined: function() {
        return this.current !== null;
    }
};
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

var Stochast = {
    
    canvas:     document.getElementById('Stochast'),
    context:    document.getElementById('Stochast').getContext('2d'),

    leaves: [],

    drawInterval: 50,
    leafSettleInterval: 2000,

    paused: false,

    init: function() {
        var self = this;
        var timer = 0;

        this.canvas.width  = window.innerWidth;
        this.canvas.height = 82;
        Gradient.init();
        this.populate();
        window.addEventListener('resize', function(){
            this.paused = true;
            clearTimeout(timer);
            timer = setTimeout(function() {self.handleResize();}, 250);
        });
    },

    handleResize: function() {
        this.canvas.width = window.innerWidth;
        this.populate();
        this.paused = false;
    },

    populate: function() {
        var totalWidth = this.canvas.width;
        var leafWidth = Leaf.prototype.width;
        var populatedWidth = this.populatedWidth();
        var x_pos = 0, y_pos = 0;
        
        // not enough leaves
        if (populatedWidth < totalWidth) {
            for (x_pos=populatedWidth; x_pos<totalWidth; x_pos+=leafWidth) {
                l = new Leaf(x_pos, y_pos, totalWidth);
                // l.draw();
                this.leaves.push(l);
            }
        }
        // too many leaves
        else {
            do {
                this.leaves.pop();
            } while (this.populatedWidth() > totalWidth);
        }

        // adjust leaf gradient sampling ratios
        for (var i = this.leaves.length - 1; i >= 0; i--) {
            var leaf = this.leaves[i];
            if (typeof leaf.ratio === 'function') {
                leaf.ratio(leaf.x / populatedWidth);
            }
        }
    },

    populatedWidth: function() {
        if (this.leaves.length > 0) {
            var lastLeaf = this.leaves[this.leaves.length - 1];
            return lastLeaf.x + lastLeaf.width;
        }
        return 0;
    },

    run: function() {
        var self = this;
        self.resettle();
        self.draw();
        setInterval(function() {self.draw();}, self.drawInterval);
        setInterval(function() {self.resettle();}, self.leafSettleInterval);
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    draw: function() {
        if (this.paused) return;
        Gradient.step();
        this.clear();
        this.context.fillStyle = 'rgb(255,255,255)';
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
        for (var i = this.leaves.length - 1; i >= 0; i--) {
            this.leaves[i].draw(this.canvas);
        }
    },

    resettle: function() {
        for (var i = this.leaves.length - 1; i >= 0; i--) {
            this.leaves[i].resettle();
        }
    }
};
Stochast.init();
Stochast.run();