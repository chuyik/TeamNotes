# writer.js

init_wmd = -> 
	setup_wmd({
	    input: "notes",
	    button_bar: "notes-button-bar",
	    preview: "notes-preview",
	    output: "copy_html",
	    helpLink: "/markdownhelp.html"
	})

window.init_wmd = init_wmd