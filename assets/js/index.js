$(document).ready(function(){
    //CAROUSEL HOME
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 300
    });

    setInterval(function() {
        $('.carousel.carousel-slider').carousel('next');
    }, 10000);

    //CAROUSEL MOVIE
    $('#carousel-movie').carousel();

    //Mobile Colapse Nav
    $('.sidenav').sidenav();

    $('.parallax').parallax();
});
  
 