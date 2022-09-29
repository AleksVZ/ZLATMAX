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
$(document).ready(function(){

    $('.slide-two').owlCarousel({
        loop:true,
        margin:20,
        autoplay:false,
        mouseDrag: true,
        nav: false,
        dots:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1529:{
                items:4
            }
        }
    });
});
$(document).ready(function(){

    $('.slide-three').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        mouseDrag: true,
        nav: false,
        dots:true,

        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1100:{
                items:2
            },
            1529:{
                items:3
            }
        }
    });
});
$(document).ready(function(){

    $('.slide-four').owlCarousel({
        loop:true,
        margin:20,
        autoplay:false,
        mouseDrag: true,
        nav: false,
        dots:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1529:{
                items:4
            }
        }
    });
});
$(document).ready(function(){

    $('.slide-five').owlCarousel({
        loop:true,
        margin:20,
        autoplay:false,
        mouseDrag: true,
        nav: false,
        dots:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1529:{
                items:4
            }
        }
    });
});

//! ______________
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + "  руб." + "     -     " + ui.values[ 1 ] + "  руб." );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "  руб." + "     -     " + 
       $( "#slider-range" ).slider( "values", 1 ) + "  руб." );
  } );