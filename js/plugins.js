$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 5000
	});
});

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



$(function(){
    $(document).ready(function(){
        var height = $(window).height();
		var width = $(window).width();
		var header =$('nav').height();
		var finalwidth =height-header;
		// alert(finalwidth);
		$('.item img').css('max-height',''+finalwidth-(finalwidth/4)+'px');
	});
});

$(function(){
    $(document).ready(function(){
        var height = $(window).height();
		var width = $(window).width();
		var header =$('nav').height();
		var finalwidth =height;
		// alert(finalwidth);
		$('.header').css('height',''+finalwidth+'px');

		$(".contact ul li a").hover(
			function(){
				$(this).css("color","#954ced");
				$(this).animate({
					right: '-50px'
				},500)
			},
			function(){
				$(this).animate({
					right: '0px'
				},500)
				$(this).css("color","black");
			}
		);

		$(".contact .btn").hover(
			function(){
				$(this).css("border", "2px solid #954ced");
				$(this).css("background", "none");
				$(this).css("color", "black");
			},
			function(){
				$(this).css("background", "#954ced");
				$(this).css("color", "#fff");
			}
		);
	});
});
