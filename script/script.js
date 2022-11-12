$(document).ready(function(){
	$(".toggle").click(function(){
		$(".slideout").toggle("show");
	});
	$(".slideout > li").click(function(){
		$("li.show-li").removeClass("show-li");
		$(this).addClass("show-li");
	});
});
