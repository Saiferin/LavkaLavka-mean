$(document).ready(function(){
    var owl1 = $('.slider-1').owlCarousel({
        loop:true,
        items:4,
        margin:250,
        
        
        responsive:{
            320:{
                items:2
            },
             360:{
                items:2
                
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }

        }
    });
    owl1.owlCarousel();
    $('#next1').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('#prev1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    var owl2 = $('.slider-2').owlCarousel({
        loop:true,
        items:4,
         margin:250,
        responsive:{
            320:{
                items:2
            },
            360:{
                items:2
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }

        }
    });
    owl2.owlCarousel();
    $('#next2').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('#prev2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

});