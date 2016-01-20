$(document).ready(function() {
  $("input[type=submit]").on("click", function(e) {
    e.preventDefault();
    $(".alternatives").toggle("slow");
  });


});
