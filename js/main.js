$(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height() * 0.99 ){
 		$('.navbar-bg').addClass('navbar-bg-show');
        $('.navbar-content').addClass('navbar-content-show');
    } else {
        $('.navbar-bg').removeClass('navbar-bg-show');
        $('.navbar-content').removeClass('navbar-content-show');
    }  
    
    if ($(window).scrollTop() > $(window).height() * 3.5 ){

 		$('.meta-cta').addClass('meta-cta-hide');
    } else {
        $('.meta-cta').removeClass('meta-cta-hide');
    }  
});

$('.scroll').on('click', function(e){		
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1500);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
          
        e.preventDefault();
      }
    }
  });
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

$('form').first().submit(function() {
    if (isValidEmailAddress($('#mce-EMAIL').val())) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event' : 'emailSignup',
            'email' : $('#mce-EMAIL').val()
        });    
    }
});

$(function () {
    $('#distorted-reality').mouseover(function() {
        $('#splash-arrow').attr("src", "../assets/images/down_arrow_hover.png");
    });
    $('#distorted-reality').mouseout(function() {
        $('#splash-arrow').attr("src", "../assets/images/down_arrow.png");
    });
});

$(function () {
    $('#sign-up').mouseover(function() {
        $('#sign-up').attr("src", "../assets/images/sign_up_hover.png");
    });
    $('#sign-up').mouseout(function() {
        $('#sign-up').attr("src", "../assets/images/sign_up.png");
    });
});

$(function () {
    $('#meta-cta').mouseover(function() {
        $('#meta-cta').attr("src", "../assets/images/meta_cta_hover.png");
    });
    $('#meta-cta').mouseout(function() {
        $('#meta-cta').attr("src", "../assets/images/meta_cta.png");
    });
});