$(function() {
    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introh = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introh);
    $(window).on("scroll load resize", function() {
        introh = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introh);
    });

    function checkScroll(scrollPos, introh) {
        if (scrollPos > introh) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 1000);
        console.log(elementOffset);
    });

    // Nav Toggle
    let nav = $("#nav");

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});