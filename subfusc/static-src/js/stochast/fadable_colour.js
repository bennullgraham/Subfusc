var FadableColour = function() {
    this.current = new Colour();
    this.target = new Colour(0, 0, 0);
    this.distance = new Colour(0, 0, 0);
    this.steps = 0;
    this.maxSteps = 1;
};
FadableColour.prototype = {

    to: function(Colour, maxSteps) {
        if (this.current.defined() === false) {
            this.current = Colour;
        }
        else if (!this.fading()) {
            this.target = Colour;
            this.maxSteps = maxSteps || 10;
            this.steps = 0;
            this.distance = Colour.subtract(this.current);
        }
        return this;
    },
    step: function() {
        if (this.current.defined() === false) {
            return this;
        }
        if (this.fading()) {
            stepDistance = this.distance.divide(this.maxSteps);
            this.current = this.current.add(stepDistance);
            this.steps++;
        } else {
            this.steps = 0;
            this.maxSteps = 0;
        }
        return this;
    },
    css: function() {
        return this.current.css();
    },
    fading: function() {
        return (this.maxSteps > 0 && this.steps < this.maxSteps);
    },
    defined: function() {
        return this.current !== null;
    }
};