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



}); //Don't move this
