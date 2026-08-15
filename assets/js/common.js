// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    const lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    };

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    // Manually manage year nav active state; scrollspy alone fails on short pages
    var manualActive = null;

    $('#navbar-year .nav-link').on('click', function (e) {
        var href = $.attr(this, 'href');
        var $target = $(href);
        if ($target.length) {
            e.preventDefault();
            manualActive = href;
            $('#navbar-year .nav-link').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({ scrollTop: Math.max(0, $target.offset().top - 80) }, 400, function () {
                setTimeout(function () { manualActive = null; }, 200);
            });
        }
    });

    // Prevent scrollspy from overriding a click-activated selection
    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
        if (manualActive) {
            $('#navbar-year .nav-link').removeClass('active');
            $('#navbar-year .nav-link[href="' + manualActive + '"]').addClass('active');
        }
    });
})
