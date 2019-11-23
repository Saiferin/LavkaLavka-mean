$(document).ready(function(){
    var owl1 = $('.slider-1').owlCarousel({
        loop:true,
        items:4,
       
        autoHeight : true,
        responsive:{

            240:{
                items:2
            },
            320:{
                items:2
            },
            384:{
                items:2
            },
            480:{
                items:2
            },
            598:{
                items:2
            },
            768:{
                items:2
            },
             900:{
                items:3
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
        
        responsive:{
            240:{
                items:2
            },
            320:{
                items:1
            },
            384:{
                items:2
            },
            480:{
                items:2
            },
            598:{
                items:2
            },
            768:{
                items:2
            },
            900:{
                items:3
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