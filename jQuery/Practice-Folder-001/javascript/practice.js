$(":header").addClass("headline");
$("li[id!='one']").hide().delay(500).fadeIn(1400);
$("li").on("click", function () {
  $(this).remove();
});
