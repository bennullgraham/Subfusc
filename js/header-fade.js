$(function(){
	var removed = ['#ce3028','#3c228b','#37177f'];
	//var palette = ['#d23a24','#ce4c26','#c7642f','#a67139','#6b774b','#4f7a6d','#416588','#423499'];
	var palette = ['#e24a34','#de5c36','#d7743f','#b68149','#7b875b','#5f8a7d','#517598','#5244a9'];
	setInterval(function(){
		colour = palette[Math.floor(Math.random() * (palette.length-1))];
		$('header').animate({
			'borderBottomColor':colour
		}, 1500);
	}, 5000);
});