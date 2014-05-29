// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.effect-blind
//=# require turbolinks
//= require bootstrap
//= require jquery.scrollTo
//= require jquery.equalheights.min
//= require jquery.cookie.js
//
//= require_tree .
//

$(function(){

	/* remove all animations if condition */
	if($.cookie('isAnimated')){
		// $('body').addClass('no-after');
	}else{
		startAnimate();
	}
	$.cookie('isAnimated', true, { expires: 1 });

	/* light up the clicked nav button */
	$('a[href="'+window.location.pathname+'"]').parent().addClass('active');


	/* scroll page when click gotop and gobottom button */
	$(window).scroll(function(){
		$("#gobottom").fadeIn(400);
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if( scrollt >200 ){
			$("#gotop").fadeIn(400);
		}else{      
			$("#gotop").stop().fadeOut(400);  
		}
	});
	$("#gotop").click(function(){
		$("html,body").animate({scrollTop:"0px"},200);
	});
	$("#gobottom").click(function(){
		$(window).scrollTo($('#comment_form').length === 0 ? 'max' : $('#comment_form'), 200);
	});


	/* handle sth after animation */
	$('.navbar-brand').css('position', 'relative');
	$('.navbar-toggle').click(function(){
		$('.navbar-collapse').removeClass('navbar-collapse_tmp');
	});
	setTimeout(function(){
		$('body').css('overflow', 'auto');
	}, 5000);
});

var _c = 0;
$('#play_btn').click(function(){
	if(_c == 0){
		startAnimate();
		_c++;
	}else{
		var _o = {};
		$('[class$="animate"]').each(function(i, o){
			var _s = /^.+\s+(.+_animate)\b$/.exec($(o).attr('class'));
			_c = (_s === null) ? $(o).attr('class') : _s[1];
			_o[_c] = this;
			$(o).removeClass(_c);
		});
		setTimeout(function(){
			for(var k in _o){
				$(_o[k]).addClass(k);
			}
		}, 10);
	}
	return false;
});

function startAnimate(){
	$('[class$="animate"]').each(function(){
		$(this).removeClass('stop-animate');
	});
}

function log(){
	if(console && console.log){
		console.log(arguments);
	}
}
