$(document).ready(function() {
  console.log('ready!');

//Parallax
$('.parallax').parallax();

//Trigger mobile hamburger menu
$(".button-collapse").sideNav(), 1000;

//Autohide mobile nav after scroll
//setTimeOut(sideNav(), 1000);


//About section expander
$('#more').click(function(){
  var $active = $('.more').find('.active');
  console.log('clicked');

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
