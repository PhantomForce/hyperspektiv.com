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