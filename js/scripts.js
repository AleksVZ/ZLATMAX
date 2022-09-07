$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});

$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout: 10000,
        autoplaySpeed:2000,
        mouseDrag: false,
        nav: false,
        dots:true,

        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1030:{
                items:1
            }
        }
    });

});