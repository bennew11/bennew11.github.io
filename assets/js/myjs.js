$(document).ready(function() {

  $('.burger-nav').click(function() {
    $("header nav ul").toggleClass("open");
  });
  
  

  $('.navbar-items').click(function() {
    var id = $(this).attr('id').split('-')[2];
    var height = $('#section-' + id).offset().top-120;
      $(window).scrollTop(height); 
    $('html,body').animate({scrollTop: height}, 'slow');
    $("header nav ul").toggleClass("open");
  });

});
