$(document).ready(function() {
    
    $('.present.modal')
        .modal('attach events', '#clearing-row button');
    
    var id =  window.location.hash;
    
    if(id){
        $('html,body').animate({
        scrollTop: $(id).offset().top},
        'slow');
    }
   
});



$(window).load(function() {
    // Animate loader off screen
    $(".hoiio.loading").fadeOut("slow");

    hljs.initHighlightingOnLoad();
    
    
});

$(document).bind('scroll',function(e){
    $('.block').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
//begins before top
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//but ends in visible area
//+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});


$('a.active').click(function(){
    return false;
  });
   
