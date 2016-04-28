$(window).load(function() {
    // Animate loader off screen
    $("body > .loading").fadeOut("slow");

});

$(document).ready(function() {
    //Modal
    
    
    hljs.initHighlightingOnLoad();
    
    var id =  window.location.hash;
    
    if(id){
        $('html,body').animate({
        scrollTop: $(id).offset().top},
        'slow');
    }
   
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
   
