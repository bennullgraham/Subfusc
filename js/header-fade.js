$(function(){
	var palette = ['#ce3028','#d23a24','#ce4c26','#c7642f','#a67139','#6b774b','#4f7a6d','#416588','#423499','#3c228b','#37177f'];
	setInterval(function(){
		colour = palette[Math.floor(Math.random() * (palette.length-1))];
		$('header').animate({
			'borderBottomColor':colour
		}, 1500);
	}, 5000);
});