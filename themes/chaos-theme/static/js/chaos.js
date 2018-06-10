
//Smooth scroll
$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
  //Close responsive menu on click
   $('.js-scroll-trigger').click(function() {
   $('.navbar-collapse').collapse('hide');
  });

  //Scrollreveal custom
window.sr = ScrollReveal();
sr.reveal('.row' , { duration: 350 });
sr.reveal('.btn', { duration: 350 });


  
