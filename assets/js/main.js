jQuery(function ($) {


  function onScroll(event) {
    //add class active when click on navbar item
    var scrollPosition = $(document).scrollTop();
    $('.navbar-collapse .nav-item a[href^="#"').each(function () {
      console.log($(this).attr('href'));
      var refElement = $($(this).attr("href"));
      if (refElement.length && refElement.position().top <= scrollPosition) {
        $('.navbar-collapse .nav-item ').removeClass("active");
        $(this).parent().addClass("active");
      }
      else {
        $(this).removeClass("active");
      }

    });
  }
  $(document).on("scroll", onScroll);
  //animate to section when click
  $('.navbar-collapse ul li a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
    $('.navbar-collapse.collapse.in').removeClass('in');
    return false;
  });
  // add fix navbar when scroll down and remove it on top 
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');

    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  
  $('.doctorSlider').owlCarousel({
    autoplay: true,
    loop: true,
    margin:15,
    rtl:true,
    dots:true,
    nav:true,
    responsive:{
    0:{
      items:1,
      nav:false,
      margin:0,
    },
    600:{
      items:2,
      nav:true,
    },
    1000:{
      items:3,
      nav:true,
    }
    }
  });
  //close mobile navbar when chooe one of items
  $(".navbar .nav-link").click(function () {
    $(".collapse").removeClass("show");
  })

});

