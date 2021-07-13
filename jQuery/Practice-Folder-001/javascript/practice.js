$(function () {
  const $windowHeight = $(window).height();
  const $windowWidth = $(window).width();
  console.log("Window Height:", $windowHeight);
  console.log("Window Width:", $windowWidth);

  const $documentHeight = $(document).height();
  const $documentWidth = $(document).width();
  console.log("Document Height:", $documentHeight);
  console.log("Document Width:", $documentWidth);

  // $("li").on("click", function (e) {
  //   $("li span").remove();
  //   let date = new Date();
  //   date.setTime(e.timeStamp);
  //   let clicked = date.toDateString();
  //   $(this).append("<span class='date'>" + clicked + " " + e.type + "</span");
  // });
  // let ids = "";
  // let $listItems = $("li");
  // $listItems.on("mouseover click", function () {
  //   ids = this.id;
  //   $listItems.children("span").remove();
  //   $(this).append("<span class='priority'>" + ids + "</span>");
  // });
  // $listItems.on("mouseout", function () {
  //   $(this).children("span").remove();
  // });
  // $(":header").addClass("headline");
  // $("ul").before("<p class='notice'>Just updated</p>");
  // $("li:contains('pine')").text("almonds");
  // $("li").on("click", function () {
  //   $(this).remove();
  // });
  // $("li").each(function () {
  //   let ids = this.id;
  //   $(this).append(`<em class="order">${ids}</em>`);
  // });
});
