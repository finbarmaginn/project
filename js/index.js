$(document).ready(function() {
  // map out class names to key value structure
  var images = {
      "chemlink": "photo/2017/04/16/18/08/test-tube-2235388__340.png",
      "phylink": "photo/2016/03/31/19/13/atom-1294810__340.png",
      "mathlink": "photo/2016/07/29/21/42/school-1555910__340.png",
      "book": "photo/2017/11/12/18/32/book-2943383__340.png"
    },
    CDNDomain = "https://cdn.pixabay.com/";

  // on hover of any of the following classnames
  $(".phylink, .chemlink, .mathlink").hover(function() {
    console.log("hover");
    var thisClass = this.className || "",
      imgUrl = CDNDomain + images[thisClass];
    $(".switcher").attr("src", imgUrl);
  }, function() {
    console.log("unhover");
    var imgUrl = CDNDomain + images["book"];
    $(".switcher").attr("src", imgUrl);
  })
});