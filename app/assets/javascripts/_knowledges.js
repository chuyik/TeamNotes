(function(){
	function init_btn(){
		$('#modify_knowledge_btn').click(function(){
			$('#notes-edit, #preview_text').toggleClass("hidden");
			$('#notes-edit').hasClass('hidden') ? $(this).val("修改") : $(this).val("取消");

			$('#update_knowledge_btn').toggleClass("hidden");

			$('#edit_editor').toggleClass("show");
		});
	};
	function init_form(){
		$('form[id^="edit_knowledge_"]')
			.on("ajax:before", function(e, data, status, xhr) {
			  log("update_knowledge_btn before ajax");
			  $(this).find('#knowledge_content').val($('#edit_editor #notes').val());
			})
			.on("ajax:success", function(e, data, status, xhr) {
				$('#modify_knowledge_btn').click();
				$('#kl_flash').addClass("alert-success").removeClass("hidden").find('div').text("更新成功");
			})
			.on("ajax:error", function(e, data, status, xhr) {
				$('#kl_flash').addClass("alert-danger").removeClass("hidden").find('div').text("更新失败");
			});;
	};
	function init_comment(){
		$('#new_comment')
			.on("ajax:before", function(e, data, status, xhr) {
			})
			.on("ajax:success", function(e, data, status, xhr) {
			})
			.on("ajax:error", function(e, data, status, xhr) {
				$('#comment_flash').addClass("alert-danger").removeClass("hidden").find('div').text("提交评论失败");
			});;
	};
	function init(){
		init_btn();
		init_form();
		init_comment();
	};

	window.init_knowledge = init;
})(this);