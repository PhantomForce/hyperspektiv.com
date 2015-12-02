$(window).scroll(function() {
    if ($(window).scrollTop() > 500 ){
 		$('#nav').addClass('navbar-show');
    } else {
        $('#nav').removeClass('navbar-show');
    };   	
});

$('.scroll').on('click', function(e){		
    e.preventDefault()
    
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1500);
});