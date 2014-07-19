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
//=# require jquery.ui.effect-blind
//= require jquery-ui/effect-blind
//=# require turbolinks
//= require bootstrap
//= require jquery.scrollTo
//= require jquery.equalheights.min
//= require jquery.cookie.js
//= require showalert
//
//= require_self
//= require_tree .
//
$(function(){
	log('app.js');

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

	$('#play_btn').click(function(){
		// restartAnimate();
		$.removeCookie('isAnimated');
		log($.cookie('isAnimated'));
		window.location.reload();
	});

	// tricks for animation
	handleAnimation();
});


function handleAnimation(){
	/* remove all animations if condition */
	if($.cookie('isAnimated')){
		/* add some animation to list-item */
		// addAnimationToList('list_animate');
	}else{
		addAnimationToList('list_delay_animate');
		startAnimate();
	}
	$.cookie('isAnimated', true); //, { expires: 1 }

	/* if animation has played, reload the page before open knowledge */
	if(isWebKit()){
		$(document).off("ajax:beforeSend", ".knowledge");
		$(document).on("ajax:beforeSend", ".knowledge", function(e, data, status, xhr) {
			if($.cookie('isAnimated') && !$.cookie('kl_reloaded')){
				$.cookie('kl_reloaded', true);
				$.cookie('kl_reloaded_href', $(this).attr('href'));
				window.location.reload();
				return false;
			}
		});

		if($.cookie('kl_reloaded') && $.cookie('kl_reloaded_href')){
			log("已经重读!");
			showAlert.success('页面刷新了一遍！原因是Webkit的CSS3的动画播放后，更改页面大小会导致背景无法锁定。经测试，FF24表现完美。');
			log('.knowledge[href="'+$.cookie('kl_reloaded_href')+'"]');
			$('.knowledge[href="'+$.cookie('kl_reloaded_href')+'"]').click();
			$.removeCookie('kl_reloaded_href');
		}
	}

	/* handle sth after animation */
	// $('.navbar-brand').css('position', 'relative');
	$('.navbar-toggle').click(function(){
		$('.navbar-collapse').removeClass('navbar-collapse_tmp');
	});
	// setTimeout(function(){
	// 	$('body').css('overflow', 'auto');
	// }, 5000);
}


var a_i = 0;
function restartAnimate(){
	$('html, body').css('overflow', 'hidden');
	if(a_i == 0){
		startAnimate();
		a_i++;
	}else{
		var _o = {};
		$('[class$="animate"]').each(function(i, o){
			var _s = /^.+\s+(.+_animate)\b$/.exec($(o).attr('class'));
			_c = (_s === null) ? $(o).attr('class') : _s[1];
			log("className: " + _c);
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
}

function startAnimate(){
	log('startAnimate');
	$.removeCookie('kl_reloaded');
	$('[class$="animate"]').each(function(){
		$(this).removeClass('stop-animate');
	});
}

function addAnimationToList(className){
	$('.list-group-item:not(:last)').each(function(i, e){
		setTimeout(function(){
			$(e).addClass(className);
		}, 100 * i);
	});
}

function isWebKit(){
	return /webkit/.test(navigator.userAgent.toLowerCase());
}

function log(){
	if(typeof console != undefined && console.log){
		console.log(arguments);
	}
}
