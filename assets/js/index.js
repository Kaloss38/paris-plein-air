$(document).ready(function(){
    //CAROUSEL
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 200
    });

    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    //Mobile Colapse Nav
    $('.sidenav').sidenav();
});
  
 