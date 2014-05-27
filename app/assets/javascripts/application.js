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
//
//= require_tree .
//

$(function(){
	if(window.location.pathname != '/'){
		$('[class$="animate"]').each(function(){
			$(this).removeClass(function(i, c){
				log(c);
				var s = /^.+\s+(.+_animate)\b$/.exec(c);
				if(s === null)
				  return c
				else
				  return s[1]
				// log("result: ", /^.+\b(.+_animate)\b$/.exec(c));
			});
			log('class after filtered: ' + $(this).attr('class'));
		});
	}
	$('a[href="'+window.location.pathname+'"]').parent().addClass('active');

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

	$('.navbar-brand').css('position', 'relative');

	$('.navbar-toggle').click(function(){
		$('.navbar-collapse').removeClass('navbar-collapse_tmp');
	});

	setTimeout(function(){
		$('body').css('overflow', 'auto');
	}, 5000);
});

function log(){
	if(console && console.log){
		console.log(arguments);
	}
}