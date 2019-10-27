$(document).ready(function () {
    // variables
    let nav     = $('.navbar');

    //nav
    $('.toggle-btn').click(function () {
        nav.slideToggle();
    });
    function collapsed () {
        if ($(window).width() <= 991) {
            $(nav).addClass('collapsed');
        } else {
            $(nav).removeClass('collapsed');
        }
    }
    $(window).resize(function () {
        collapsed();
    });
    collapsed();
    $('.navbar.collapsed .mainMenu').click(function () {
        $(this).find('> .subMenu').slideToggle().parent().siblings().find('.subMenu').slideUp();
        return false;
    });
    $('.navbar .mainMenu .subMenu.search input').focus(function () {
        $(this).parent().addClass('active');
    });
    $('.navbar .mainMenu .subMenu.search input').blur(function () {
        $(this).parent().removeClass('active');
    });

    //slider
    $('.single-item-rtl').slick({
        rtl: true,
        autoplay:true,
        dots: true,
        arrows:false
    });

    // accordion
    $('.accordion .collapsed-lists h2').click(function () {
        $(this).parent().find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-toggle-on fa-toggle-off')
    });

    //calendar
    var cal2 = new Calendar(true, 0, false, true),
    cal2Mode = cal2.isHijriMode();
    document.getElementById('calendar-converter').appendChild(cal2.getElement());
    cal2.setDisplayStyle('inline-block');
    cal2.getElement().style.marginLeft = '20px';
    cal2.show();

    cal2.callback = function() {
        if (cal2Mode !== cal2.isHijriMode()) {
            cal2Mode = cal2.isHijriMode();
        }
    };

    cal2.onHide = function() {
        cal2.show(); // prevent the widget from being closed
    };
});