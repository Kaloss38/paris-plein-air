$(document).ready(function(){
    //CAROUSEL HOME
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 300
    });

    setInterval(function() {
        $('.carousel').carousel('next');
    }, 5000);

    //CAROUSEL MOVIE
    $('#carousel-movie').carousel();

    //Mobile Colapse Nav
    $('.sidenav').sidenav();
});
  
 