$(document).ready(function() {

//Underline sections on scroll
function initScrollSpy(){
$('.scrollspy').scrollSpy();
}

//Resize fixed navbar on scroll, show scroll-to-top button
function navScroll(){
$(window).on("scroll touchmove", function () {
  if ($(window).width() > 680) {
    //Don't resize navbar is the screen is smaller than 571px
    //in reality ends up being closer to 587px? either way, that's fine
    $('.top-header').toggleClass('shrink', $(document).scrollTop() > 0);
  }

  //add scroll-to-top button after scroll is initiated
  $('#scroll-up').scrollTop(100).show(400);
});
}

//Remove row class from cards on screens smaller than 571px width
//to allow cards to stack
function stackCards(){
$(window).resize( function(){
  if ($(window).width() < 571){
    $('div.stack-cards').removeClass("row, valign-wrapper");
  }
});
}

//About section expander
function expandText(){
$('#more').click(function(){
  var $active = $('.more .active');
<<<<<<< HEAD
  console.log('clicked');

=======
>>>>>>> 5a3d056aae0c09bb0c512be084ef22df75ae5a16
    //show extra info
     $('.hidden').stop().slideDown("slow").addClass('active');

    //hide extra info again
    $active.stop().slideUp().removeClass('active');
   });
}

//Text-Swap on More/Less button
function textSwap(){
  $('#more').click(function() {
      var el = $(this);
      if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
      } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
      }
  });//end text swap
}

//About section resume tab
function openResume() {
	$('a#resume').click(function(){
    window.open(this.href);
    return false;
});
}

//Smooth scrolling for internal links
//Credit: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
function smoothScrolling() {
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
}

//invoke functions
initScrollSpy();
navScroll();
stackCards();
expandText();
textSwap();
openResume();
smoothScrolling();

}); //End wrapper function
