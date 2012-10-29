/**
 * Stochast
 *
 * This object manages a canvas-based colour animation. It consists
 * of many rectangles laid left to right. They sample a colour from
 * a colour gradient. The sample position is based on the
 * rectangle's left/right position but includes a small random
 * factor.
 *
 * After sampling a colour, each rectangle ("leaf") begins fading
 * to that colour.
 *
 * This creates an overall gradient with shifting, localised
 * contrast.
 *
 */
var Stochast = {
    

/**
 * Convenient references to canvas and context
 *
 */
    canvas:     document.getElementById('Stochast'),
    context:    document.getElementById('Stochast').getContext('2d'),


/**
 * Object used for managing a set of 'leaves' - discrete colour
 * panels, which I could not think of a better name for.
 *
 */
    leaves: new Leaves(),


/**
 * Milliseconds between redrawing canvas frames
 *
 */
    drawInterval: 50,


/**
 * Milliseconds between resampling colours for leaves
 *
 */
    leafSettleInterval: 2000,


/**
 * This is set true during window resize to prevent redrawing and
 * resultant flicker
 *
 */
    paused: false,


/**
 * Initialisation; populate leaves, set canvas width
 *
 */
    init: function() {
        var populateOpts = {
            width: this.width()
        };
        this.canvas.width  = this.width();
        this.canvas.height = 82;
        Gradient.init();
        this.bind();
        this.leaves.populate(populateOpts);
        
        return this;
    },


/**
 * Bind event listeners
 *
 */
    bind: function() {
        var self = this;
        var timer = 0;
        window.addEventListener('resize', function(){
            this.paused = true;
            // defer handler for 250ms because window.resize fires a lot
            clearTimeout(timer);
            timer = setTimeout(function() {self.handleResize();}, 150);
        });
    },


/**
 * After a window resize event, resize the canvas and let the leaves
 * object know it may need more or less leaves to continue to cover
 * the whole canvas
 *
 */
    handleResize: function() {
        var populateOpts = {
            width: this.width()
        };
        this.canvas.width = this.width();
        this.leaves.populate(populateOpts);
        this.paused = false;
        this.resettle();
        this.draw();
    },


/**
 * Execute draw and resettle functions, and schedule them into the
 * future.
 *
 */
    run: function() {
        var self = this;
        self.resettle();
        self.draw();
        setInterval(function() {self.draw();}, self.drawInterval);
        setInterval(function() {self.resettle();}, self.leafSettleInterval);
        return this;
    },


/**
 * Clear the canvas so a new frame may be drawn without persisting
 * old frame content.
 *
 */
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return this;
    },


/**
 * Cause drawable objects to be drawn. The background gradient
 * also clocks its fade against this function.
 *
 */
    draw: function() {
        if (!this.paused) {
            Gradient.step();
            this.clear();
            this.leaves.draw(this.canvas);
        }
        return this;
    },


/**
 * Cause leaves to sample new colours
 *
 */
    resettle: function() {
        this.leaves.resettle();
        return this;
    },

    width: function() {
        return document.getElementById('Header').offsetWidth;
    }
};
Stochast.init().run();