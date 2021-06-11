function lazy_load() {
    $('.lazy').each(function(img) {
        if ($(this).offset().top + $(this).outerHeight() <= ($(window).scrollTop() + $(window).height())) {
            var path_src = $(this).attr('data-name');
            var split_data = path_src.split('|');
            var img_html = '<picture><img src="' + split_data[0] + '" alt="' + split_data[2] + '" class="' + split_data[3] + '"></picture>';
            $(this).html(img_html);
            $(this).show(500);
            $(this).removeClass('lazy');
        }
    });
    $('.lazy_bg').each(function() {
        if ($(this).offset().top + $(this).outerHeight() <= ($(window).scrollTop() + $(window).height())) {
            var path_src = $(this).attr('data-name');
            $(this).css('background-image', path_src);
            $(this).removeClass('lazy_bg');
        }
    });
    $('.src').each(function() {
        $(this).removeClass('src');
        var path_src = $(this).attr('data-name');
        $(this).attr('src', path_src);
    });
}
$(window).on('resize scroll', function() {
    lazy_load();
});
window.addEventListener("load", function() {});