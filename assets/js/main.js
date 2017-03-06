/* arctic scroll */

(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500,
            scroll_selector: 'html,body'
        };

        var options = $.extend(defaults, options),
            to_scroll = options.scroll_selector;

        options.elem.click(function(event){
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;

            if (offset) {
                var toMove = parseInt(offset);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: toMove }, options.speed);
            } else {
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, options.speed);
            }
        });

    };
})(jQuery);

$(function(){
    $(".arctic_scroll").arctic_scroll({
        speed: 800
    });
});

/* hide cover img chevron */

$(document).scroll(function() {
    var y = $(this).scrollTop();
    var scrollOffset = $('#scroll-to-text').offset().top + (-350);

    if (y > scrollOffset) {
        $('#scroll-to-text').addClass('hide');
    }
    else {
        $('#scroll-to-text').removeClass('hide');
    }
    
});

/* nav hide/show */

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('#navigation').addClass('show');
        $('#navigation').removeClass('hide');
    }
    else {
        $('#navigation').addClass('hide');
        $('#navigation').removeClass('show');
    }
});

/* slick carousel */

$(document).ready(function(){
  $('.index-header').slick({
  dots: true,
  draggable: true,
  infinite: true,
  fade: true,
  autoplay: true,
  });
});


