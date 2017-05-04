$(document).ready(function() {

//Underline sections on scroll
$('.scrollspy').scrollSpy();

//Resize fixed navbar on scroll, show scroll-to-top button
$(window).on("scroll touchmove", function () {
  if ($(window).width() > 680) {
    //Don't resize navbar is the screen is smaller than 571px 
    //in reality ends up being closer to 587px? either way, that's fine
    $('.top-header').toggleClass('shrink', $(document).scrollTop() > 0);
  }

  //add scroll-to-top button after scroll is initiated
  $('#scroll-up').scrollTop(100).show(400);
});

//Remove row class from cards on screens smaller than 571px width
//to allow cards to stack
$(window).resize( function(){
  if ($(window).width() < 571){
    $('div.stack-cards').removeClass("row, valign-wrapper");
  }
});

//About section expander
$('#more').click(function(){
  var $active = $('.more').find('.active');
  console.log('clicked');

    //show extra info
     $('.hidden').stop().slideDown("slow").addClass('active');

    //hide extra info again
    $active.stop().slideUp().removeClass('active');
   });

//Text-Swap on More/Less button
  $('#more').click(function() {
      var el = $(this);
      if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
      } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
      }
  });//end text swap

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
