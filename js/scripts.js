//Grab our current Url
var url = window.location.toString();
//Remove anchor from url using the split
url = url.split(“#”)[0];

// Collapse Navbar if scrolled past a certain amount.
var collapseNav = function() {
  if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("smallNav");
  } else {
      $("#mainNav").removeClass("smallNav");
  }
};
// Collapse now if page is not at top
collapseNav();
// Collapse the navbar when page is scrolled
$(window).scroll(collapseNav);

//Use scrollspy to highlight nav links when active
$("body").scrollspy({target: "#mainNav"});


//Collapse navbar when scroll link is pressed
$(".scroll-trigger").click(function() {
  $(".navbar-collapse").collapse("hide");
});
