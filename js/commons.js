jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
    controls: false
  });

  jQuery('.gotop').on('click', function(e){
  	e.preventDefault();
    jQuery('html,body').animate({scrollTop: jQuery('body').offset().top - 74}, 500);
  });
});
