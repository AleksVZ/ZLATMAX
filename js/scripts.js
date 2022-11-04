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
        loop:false,
        margin:20,
        autoplay:false,
        mouseDrag: false,
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
        loop:false,
        margin:10,
        autoplay:false,
        mouseDrag: false,
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
        loop:false,
        margin:20,
        autoplay:false,
        mouseDrag: false,
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
        loop:false,
        margin:20,
        autoplay:false,
        mouseDrag: false,
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

// Price-slider
// $( function() {
//     $( "#slider-range" ).slider({
//       range: true,
//       min: 0,
//       max: 5000,
//       values: [ 75, 300 ],
//       slide: function( event, ui ) {
//         $( "#amount" ).val(ui.values[ 0 ] + "  руб." + "  |  " + ui.values[ 1 ] + "  руб." );
//       }
//     });
//     $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "  руб." + "  |  " + 
//        $( "#slider-range" ).slider( "values", 1 ) + "  руб." );
//   } );

//   $( ".sort_production_checkbox" ).click(function() {
//     $( this ).slideUp();
//   });


// ф-ция Toggle при клике
$(".production_input").hide();
$( "#sort_production_slideToggle" ).click(function() {
    $( ".production_input" ).slideToggle();
  });


// Изменение цвета по клику
// $(document).ready(function() {
//     $("#sort_production_slideToggle").click(function() {
//         $(this).css('color', 'orange');
//     });
// });
// поворот картинки при клике
$('h4#sort_production_slideToggle').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon').toggleClass('active');
});

$(".production_input_2").hide();
$( " #sort_production_slideToggle_2" ).click(function() {
    $( ".production_input_2" ).slideToggle();
});
$('h4#sort_production_slideToggle_2').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_2').toggleClass('active');
});

$(".production_input_3").hide();
$( " #sort_production_slideToggle_3" ).click(function() {
    $( ".production_input_3" ).slideToggle();
});
$('h4#sort_production_slideToggle_3').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_3').toggleClass('active');
});

$(".production_input_4").hide();
$( " #sort_production_slideToggle_4" ).click(function() {
    $( ".production_input_4" ).slideToggle();
});
$('h4#sort_production_slideToggle_4').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_4').toggleClass('active');
});

$(".production_input_5").hide();
$( " #sort_production_slideToggle_5" ).click(function() {
    $( ".production_input_5" ).slideToggle();
});
$('h4#sort_production_slideToggle_5').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_5').toggleClass('active');
});

$(".production_input_6").hide();
$( " #sort_production_slideToggle_6" ).click(function() {
    $( ".production_input_6" ).slideToggle();
});
$('h4#sort_production_slideToggle_6').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_6').toggleClass('active');
});

$(".production_input_7").hide();
$( " #sort_production_slideToggle_7" ).click(function() {
    $( ".production_input_7" ).slideToggle();
});
$('h4#sort_production_slideToggle_7').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_7').toggleClass('active');
});

$(".production_input_8").hide();
$( " #sort_production_slideToggle_8" ).click(function() {
    $( ".production_input_8" ).slideToggle();
});
$('h4#sort_production_slideToggle_8').click(function (e) {
    e.preventDefault();
    $(this).find('span.span_icon_8').toggleClass('active');
});


//?      __________


  
  // Price slider_length
  let startValue = 100;
  let endValue = 900;
  let minValue = 100;
  let maxValue = 900;
    $("#slider-container").slider({
      range: true,
      min: minValue,
      max: maxValue,
      values: [startValue, endValue],
      create: function(){
        $("#amount-from").val(startValue);
        $("#amount-to").val(endValue);
      },
      slide: function(event, ui){
        $("#amount-from").val(ui.values[0]);
        $("#amount-to").val(ui.values[1]);
        let from = $("#amount-from").val();
        let to = $("#amount-to").val();
        console.log( from + " --- " + to );
      }
    });
// Price slider_Price
let startValuePrice = 100;
let endValuePrice = 5000;
let minValuePrice = 100;
let maxValuePrice = 5000;
$("#slider-container-price").slider({
    range: true,
    min: minValue,
    max: maxValue,
    values: [startValue, endValue],
    create: function(){
    $("#amountPrice-from").val(startValuePrice);
    $("#amountPrice-to").val(endValuePrice);
    },
    slide: function(event, ui){
    $("#amountPrice-from").val(ui.values[0]);
    $("#amountPrice-to").val(ui.values[1]);
    let from = $("#amountPrice-from").val();
    let to = $("#amountPrice-to").val();
    console.log( from + " --- " + to );
    }
});

// Price slider_Blade
let startValueBlade = 100;
let endValueBlade = 800;
let minValueBlade = 100;
let maxValueBlade = 800;
$("#slider-container_blade").slider({
    range: true,
    min: minValue,
    max: maxValue,
    values: [startValue, endValue],
    create: function(){
    $("#amount_blade-from").val(startValueBlade);
    $("#amount_blade-to").val(endValueBlade);
    },
    slide: function(event, ui){
    $("#amount_blade-from").val(ui.values[0]);
    $("#amount_blade-to").val(ui.values[1]);
    let from = $("#amount_blade-from").val();
    let to = $("#amount_blade-to").val();
    console.log( from + " --- " + to );
    }
});

// слайдер галереи карточки товара(замена фотографий)
const container = document.querySelector('.container_big_photo');
const preview = document.querySelector('.prev')
const active = document.querySelectorAll('.thumb');


container.addEventListener('click', function(e){
  
  if( e.target.className == 'thumb' ){
    preview.src= e.target.src;
    preview.classList.add('effect');
    
    setTimeout(function(){
      preview.classList.remove('effect');
    }, 100)
    
    active.forEach(function(thumb){
      if (thumb.classList.contains('active')){
        thumb.classList.remove('active');
      }
    });
    
    e.target.classList.add('active');
  }
  
});



// billing box
function updateCounter(idCounter, idCost, idTotal, increment) {
	var counter = document.getElementById(idCounter);
	var amount = 0;
	if (!isNaN(counter.value) && counter.value >= 0) {
		amount = Number(counter.value) + increment;
		if (amount < 0) {
			amount = 0;
		}
	} else {
		amount = 0;
	}
	counter.value = amount;
	costPerPiece = Number(document.getElementById(idCost).innerText);
	document.getElementById(idTotal).innerText = (amount * costPerPiece).toFixed(2);
	updatePrices();
}
// ___________

// TABS jQuary
$( function() {
    $( "#tabs" ).tabs();
  } );

//   ___________

