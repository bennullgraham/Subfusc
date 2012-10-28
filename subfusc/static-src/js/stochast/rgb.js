var Rgb = function(r, g, b) {
	if (typeof r === 'number') {
		self.rgb = [r, g, b];
	}
	else {
		self.rgb = r;
	}
};
Rgb.prototype = {
	rgb: [0, 0, 0],

	add: function(other_rgb) {
		return new Rgb([
			this.r + other_rgb.r,
			this.g + other_rgb.g,
			this.b + other_rgb.b
		]);
	},
	sub: function(other_rgb) {
		return new Rgb([
			this.r - other_rgb.r,
			this.g - other_rgb.g,
			this.b - other_rgb.b
		]);	
	}
};