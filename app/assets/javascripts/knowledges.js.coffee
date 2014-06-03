# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
# 
#= require wmd/wmd
#= require wmd/showdown
#= require writer
try
	init_wmd()
catch e
	# ...

$('#knowledges').equalHeights()

$().ready ->
	$('#notes-edit').addClass("has-error") if $('#knowledge_content').parent('.field_with_errors').length == 1
	$('#new_knowledge').submit (e) ->
		$(this).find('#knowledge_content').val($('#notes').val())

if(window.location.pathname == '/')
    $('html, body').css('overflow', 'hidden')
else
    $('html, body').css('overflow', 'auto')


# $('.knowledge').click ->
# 	o = @
# 	$('.knowledge').each ->
# 		if (@ == o) then $(@).addClass('active') else $(@).removeClass('active')
