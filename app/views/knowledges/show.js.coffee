lightUpComment = ->
	$(this).scrollTo('0px', 100);
	$('#comments div').eq(0).children().each ->
		color = $(@).css('background-color')
		$(@).css({'background-color':'#F8EEDD'}).animate({'background-color':'#DDF8DD'}, 500).animate({'background-color':color}, 600)


$(document).off "ajax:success", ".knowledge, #new_comment"
$(document).on "ajax:success", ".knowledge, #new_comment", (e, data, status, xhr) ->
	log("knowledge.js.coffee..")
	# fail
	if data.constructor == Object
		for k, v of data
			$("#comment_#{k}").parent().addClass("has-error")
		$('#comment_flash').addClass("alert-danger").removeClass("hidden").text("提交评论失败")
	# success
	else
		$('#content_text').html("<%= j(render @knowledge) %>")
		$('#content_text').css({'left': '5%'}).animate({'left': '0%'}, 200)

		log($(document).height())
		setTimeout (->
			$('html, body').css('overflow', 'visible').height($(document).height())), 800
		# $('#content_area').css({'padding': '5% 5%'}).animate({'padding': '0% 15px'}, 200);
		init_wmd()
		init_knowledge()
		$('.knowledge').click ->
			o = @
			$('.knowledge').each ->
				if (@ == o) then $(@).addClass('active') else $(@).removeClass('active')

		$('.comment').mouseenter ->
			$(this).find(':submit').removeClass "hidden"
		$('.comment').mouseleave ->
			$(this).find(':submit').addClass "hidden"

		$('#kl_btns').mouseenter ->
			$(this).find('#kl-tips').removeClass("hidden").hide().fadeIn()
		$('#kl_btns').mouseleave ->
			$(this).find('#kl-tips').fadeOut()

	<% if @cur_comment != nil %>
		log("high up new comment..")
		lightUpComment()
	<% end %>

$(document).off "ajax:success", ".del_btn"
$(document).on "ajax:success", ".del_btn", (e, data, status, xhr) ->
	$("#comment_#{data.id}").remove()

# $(document).off "ajax:success", "#update_knowledge_btn"
# $(document).on "ajax:success", "#update_knowledge_btn", (e, data, status, xhr) ->
# 	log("..")
# 	$('#content_text').html("<%= j(render @knowledge) %>")
# 	init_wmd()
# 	init_knowledge()
