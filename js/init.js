$(document).ready(function() {
   $(window).scroll(function(){
       if($(this).scrollTop() > 960) {
           $('.navbar').css("background-color", "black");
       } else {
           $('.navbar').css("background-color", "rgb(0, 0, 0, 0.5)");
       }
   })
}) 