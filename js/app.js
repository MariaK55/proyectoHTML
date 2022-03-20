$(document).ready(function() {
  $("#btn_menu").on("click", function() {
    $("nav ul").toggle("slow");
  });

  var altura = $(".menu").offset().top;

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > altura) {
      $(".menu").addClass("menu-fixed");
    } 
  });

  var height = $(window).height();
  $(".modal").height(height);
  
});
