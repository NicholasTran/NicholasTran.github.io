//Remove anchor tag from url when anchor link clicked
window.addEventListener("hashchange", function(event){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL);
});
//Collapse navbar when scroll link is pressed
$(".scroll-trigger").click(function() {
  $(".navbar-collapse").collapse("hide");
});

//Use scrollspy to highlight nav links when active
$("body").scrollspy({target: "#mainNav"});

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
