$(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= 20) {
			$(".navbar-default-change").css({
				"position": "fixed",
    			"z-index": "100",
    			"width": "100%"
			})
			$(".logo").css({
				"height": "68px",
				"width": "68px",
				"line-height": "37px"
			})
			$(".navbar-default .navbar-nav > li > a").css({
				"line-height": "37px"
			})
			$(".carousel-hero--noslider").css({
				"padding": "0 70px"
			})			
		} else {
			$(".navbar-default-change").css({
				"position": "relative",
    			"z-index": "100",
    			"width": "100%"
			})
			$(".logo").css({
				"height": "80px",
				"width": "80px",
				"line-height": "50px"
			})
			$(".navbar-default .navbar-nav > li > a").css({
				"line-height": "50px"
			})
			$(".carousel-hero--noslider").css({
				"padding": "0 81px"
			})
		}
	})
})
