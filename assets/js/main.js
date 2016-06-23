(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal-trigger').leanModal();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top });
    $('.scrollspy').scrollSpy();
    
    // mansory init
    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space