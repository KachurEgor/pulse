// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             }
//         ]
        
//       });
//   });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            nav:true,
            navText : ["",""]
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        }
        
    );
  });