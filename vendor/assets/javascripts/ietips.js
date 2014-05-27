/*
 * Author: Chuyik
 * Date: 2014-5-27
 */
window.onload = function(){
  var div = $('<div>亲爱的用户您好！您的浏览器不支持css动画，无法看到该网站的动画效果~！建议用 Chrome / FF5+ 试试。</div>');
  div.css({
  	'position':'absolute', 'top':'-10%', 'z-index': '1000000', 'width': '80%', 'margin': '0 10%', 'text-align': 'center'
  });
  div.addClass('alert alert-danger');
  div.animate({'top': '0%'}, 1000);
  $('body').append(div);

  setTimeout(function(){
  	div.animate({'top': '10%'}, 1000);
  	div.css({
  	  'position':'relative', 'z-index': '0', 'top': '20%'
  	});
  	div.appendTo($('#kl-list'));
  }, 4000);
};
