$(document).ready(function() {

//Trigger mobile hamburger menu
  $(".button-collapse").sideNav();

//About section expander
$('#more').click(function(){
  var $active = $('.more').find('.active');

    //show extra info
     $('.hidden').stop().slideDown("slow").addClass('active');

    //hide extra info again
    $active.stop().slideUp().removeClass('active');
   });

//About section resume tab
$('a#resume').click(function(){
    window.open(this.href);
    return false;
});

//Smooth scrolling for internal links
//Credit: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });



}); //End wrapper function
