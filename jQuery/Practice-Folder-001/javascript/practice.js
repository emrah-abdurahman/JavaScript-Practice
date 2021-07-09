$(":header").addClass("headline");

$(function () {
  $("ul").before("<p class='notice'>Just updated</p>");
  $("li:contains('pine')").text("almonds");
});

$("li").on("click", function () {
  $(this).remove();
});
