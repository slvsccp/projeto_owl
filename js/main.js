jQuery(document).ready(function ($) {
  // header fixo qnd scrollar página
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };
});

// mostra/oculta serviços
$(".readmore-btn").on('click', function(){
  $(this).parent().toggleClass("showContent");
  var replaceText = $(this).parent().hasClass("showContent") ? "Ocultar" : "Leia mais..";
  $(this).text(replaceText);
});