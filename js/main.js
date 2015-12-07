$(window).scroll(function() {
    if ($(window).scrollTop() > 500 ){
 		$('.navbar-bg').addClass('navbar-bg-show');
        $('.navbar-content').addClass('navbar-content-show');
    } else {
        $('.navbar-bg').removeClass('navbar-bg-show');
        $('.navbar-content').removeClass('navbar-content-show');
    };   	
});

$('.scroll').on('click', function(e){		
    e.preventDefault()
    
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1500);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function () {
    $('#distorted-reality').mouseover(function() {
        $('#splash-arrow').attr("src", "../assets/images/down_arrow_hover.png");
    });
    $('#distorted-reality').mouseout(function() {
        $('#splash-arrow').attr("src", "../assets/images/down_arrow.png");
    });
});