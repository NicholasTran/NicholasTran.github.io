$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
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
