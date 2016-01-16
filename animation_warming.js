//JQuery animation functions
$(document).ready(function(){
	$("nav").hide();
	$(".content").hide();
	$(".dinfo").hide();
	$('html').click(function(){
		$(".startp").hide();
		$('.main').animate({left: 280}, 'slow');
		$("nav").fadeIn(8000);
		$(".dinfo").fadeIn(10000);
		$('.main').animate({opacity: 1}, 12000);
		$("p").hide();
		$("h3").hide();
		$('.content').slideToggle(15000);
		$("h3").show(15000);
		$("p").show(10000);
		$("p").animate({opacity: 0.9}, 2000);
		$('.content').animate({right: 280}, 'slow');
		$(".content").fadeOut(20000);
		$("p").fadeOut(20000);
		$('.main').fadeOut(20000);
		$(".dinfo").fadeOut(23000);
	})
})
