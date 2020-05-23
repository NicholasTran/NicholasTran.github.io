//Smooth Scroll with jQuery
$("a.scroll-trigger").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;

     //Scroll using jQuery animate
     $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 66
      },
      1000,
      "easeInOutExpo"
    );
   }
});

//Collapse navbar when scroll link is pressed
$(".scroll-trigger").click(function() {
  $(".navbar-collapse").collapse("hide");
});

//Use scrollspy to highlight nav links when active
$("body").scrollspy({target: "#mainNav", offset:100});

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

//Disable hover effects on scroll
var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },100);
}, false);
