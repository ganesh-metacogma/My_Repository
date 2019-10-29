$(document).ready(function() {
  $(".availability").on("click", function() {
    $(this).toggleClass("btn-success btn-danger");

    if ($(this).text() === "Yes") $(this).text("No");
    else $(this).text("Yes");
  });
  /*$(".availability").on("click", function() {
    $(this).text($(this).text() === "Yes" ? "No" :);
  });*/
});
