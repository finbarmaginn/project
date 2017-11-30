$(document).ready(function() {
  // write js to target and do different things to your html elements by using
  // classes and different id's etc

  // $(".phylink") will target all html elements in the page that have the class
  // phylink

  // <img class="chemimg" src="https://cdn.pixabay.com/photo/2017/04/16/18/08/test-tube-2235388__340.png" />
  // <img class="mathimg" src="https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910__340.png" />

  $(".phylink, .chemlink, .mathlink").hover(function() {
    switch (this.className) {
      case "phylink":
        $(".switcher").attr("src", "https://cdn.pixabay.com/photo/2016/03/31/19/13/atom-1294810__340.png");
        break;
      case "chemlink":
        $(".switcher").attr("src", "https://cdn.pixabay.com/photo/2017/04/16/18/08/test-tube-2235388__340.png");
        break;
      case "mathlink":
        $(".switcher").attr("src", "https://cdn.pixabay.com/photo/2016/07/29/21/42/school-1555910__340.png");
        break;
    }
  })
});