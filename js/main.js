$(document).ready(function() {

    $(".nav-icon").click(function() {
        $(".full-nav").addClass("open");
        $(".header").removeClass(".nav")

    });
    $(".nav-close").click(function() {
        $(".full-nav").removeClass("open");

    });
    // s-------------------sticky nav bar========================

    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }

        // moving slider with bxslider plugin

        

    });
    $('.bxslider').bxSlider({
        	// mode:'horizontal',
        	// moveSlides:1,
        	// slideMargin:40,
        	// infiniteLoop:true,
        	// minSlides:1,
        	// maxSlides:1,
        	// speed:1200,
        });


});

