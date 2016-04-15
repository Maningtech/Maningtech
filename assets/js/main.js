(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal-trigger').leanModal();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');
    $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top });
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space