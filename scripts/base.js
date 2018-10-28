$(document).ready(function () {
  $( '.footer_fascade' ).mouseenter(
    function() {
      $('.footer').css('transform','translateY(-10px)');
    }
  ).mouseleave(function(){
    $('.footer').css('transform','translateY(60px)');
  });
  $('.footer').mouseenter(function() {
    $('.footer').css('transform','translateY(-10px)');
  })
  $('.footer').mouseleave(function() {
      $('.footer').css('transform','translateY(60px)');
    });
});