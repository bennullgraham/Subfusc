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