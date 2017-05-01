$(document).ready(function() {

//Underline sections on scroll
$('.scrollspy').scrollSpy();

//Resize fixed navbar on scroll
$(window).on("scroll touchmove", function () {
  $('.top-header').toggleClass('shrink', $(document).scrollTop() > 0);
});

//Trigger scroll-up button appearance, fade-in project images
 var options = [
      {selector: '#scroll-up', offset: 500, callback: function(el) {
        $(el).show();
      } },
      {selector: '#bug', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    
    Materialize.scrollFire(options);

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
