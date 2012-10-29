var Leaves = function(){};
Leaves.prototype = {
    
    leaves: [],
    totalWidth: 0,

    populate: function(opts) {
        opts = opts || {};
        var totalWidth = typeof opts.width === 'undefined' ? 0 : opts.width;
        var leafWidth = Leaf.prototype.width;
        var populatedWidth = this.populatedWidth();
        var x_pos = 0, y_pos = 0;
        var leaf = null;

        // not enough leaves
        if (populatedWidth < totalWidth) {
            for (x_pos=populatedWidth; x_pos<=totalWidth; x_pos+=leafWidth) {
                leaf = new Leaf(x_pos, y_pos);
                leaf.ratio(x_pos / totalWidth);
                this.leaves.push(leaf);
            }
            populatedWidth = x_pos + leaf.width;
        }
        // too many leaves
        else {
            do {
                leaf = this.leaves.pop();
                populatedWidth -= leaf.width;
            } while (populatedWidth > totalWidth);
        }

        // adjust leaf gradient sampling positions via ratio
        _.each(this.leaves, function(leaf) {
            leaf.ratio(leaf.x / populatedWidth);
        });
    },

    populatedWidth: function() {
        if (this.leaves.length > 0) {
            var lastLeaf = this.leaves[this.leaves.length - 1];
            return lastLeaf.x + lastLeaf.width;
        }
        return 0;
    },

    draw: function(canvas) {
        _.each(this.leaves, function(leaf){ leaf.draw(canvas); }, this);
    },

    resettle: function() {
        _.each(this.leaves, function(leaf){ leaf.resettle(); });
    },

    width: function(width) {
        if (typeof width !== 'undefined') {
            this.totalWidth = width;
        }
        return this.totalWidth;
    }
};