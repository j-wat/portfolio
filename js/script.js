$(document).ready(function(){
  //contact page oval height
  $('.contact-info-md-lg').css("height", $('.contact-info-md-lg').width()*0.6);
  $('.contact-info-xs').css("height", $('.contact-info-xs').width()*0.6);

  //expandable menu for xs sm devices
  $(".menu-xs").click(function(){
    $(".button-xs").toggle();
  });
});
