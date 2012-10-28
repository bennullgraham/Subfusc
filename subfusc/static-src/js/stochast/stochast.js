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