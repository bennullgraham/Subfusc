$(function(){
	var links = $('ul.links li a');
	links.mouseenter(function(){
		$(this).parent().stop().animate({'margin-left':'5px'}, 100);
	});
	links.mouseleave(function(){
		$(this).parent().stop().animate({'margin-left':'0'}, 100);
	});
});