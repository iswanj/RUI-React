$(window).load(function(){
	$('pre code').each(function(i, block) {
	hljs.highlightBlock(block);
	});
});
$(document).ready(function() {
	var converter = new showdown.Converter();

	$('.sscode').each(function(){
		var thisEl = $(this);
		var thisCode = thisEl.html();
		var html 	= converter.makeHtml(thisCode);
		thisEl.html(html)
	});
    
});
