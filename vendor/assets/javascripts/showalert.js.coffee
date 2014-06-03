( -> 
    baseCss = {
    'position':'absolute', 'z-index': '1000000', 'width': '80%', 'margin': '0 10%', 'text-align': 'center'
    }
    baseTimeoutCss = {
        'position':'relative', 'z-index': '0'
    }

    _default = (html, css, animateCss, timeoutCss, className) ->
        div = $("<div class='alert'>#{html}</div>")
        _css = $.extend({}, baseCss, css)
        log(_css)
        div.addClass(className).css(_css).animate(animateCss, 1000)

        $('body').append(div)

        setTimeout( ->
          timeoutCss = $.extend({}, baseTimeoutCss, timeoutCss)
          div.css(timeoutCss).animate(css, 1000).appendTo($('#kl-list'))
        , 4000)

    showAlert = {
        success : (html) ->
            _default(html, {'bottom': '100%'}, {'bottom': '96.3%'}, {'top': '20%'}, 'alert-success')
        error : (html) -> 
            _default(html, {'bottom': '100%'}, {'bottom': '96.3%'}, {'top': '40%'}, 'alert-danger')
    }

    window.showAlert = showAlert
)()
