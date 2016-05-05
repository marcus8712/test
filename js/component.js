$(window).load(function() {
    
    // Page Info
    $('meta[name=description]').attr("content","Design Standards is a carefully crafted design developed by Hoiio UX Team.");
    $('meta[name=keywords]').attr("content","design, standards, hoiio, uxdesign, user interface, semantic");
    $('meta[name=author]').attr("content","Hoiio UX Team");
    
    // Animate loader off screen
    $("body > .loading").fadeOut("slow");
    
    var hash = window.location.hash;
    $('html,body').animate({
        'scrollTop' : $(hash).offset().top - 50
    },'slow');
    
    

});

$(document).ready(function() {

    
        
    // Modal Trigger
    $('#clearing-rows-modal')
        .modal('attach events', '#clearing-rows button');
    $('#specifying-row-width-modal')
        .modal('attach events', '#specifying-row-width button');
    $('#specifying-column-width-modal')
        .modal('attach events', '#specifying-column-width button');
    $('#special-variations-modal')
        .modal('attach events', '#special-variations button');
    $('#centering-content-modal')
        .modal('attach events', '#centering-content button');
    $('#vertical-alignment-modal')
        .modal('attach events', '#vertical-alignment button');
    $('#text-alignment-modal')
        .modal('attach events', '#text-alignment button');
    $('#floating-rows-modal')
        .modal('attach events', '#floating-rows button');
    $('#equal-with-columns-modal')
        .modal('attach events', '#equal-with-columns button');
    $('#doubling-modal')
        .modal('attach events', '#doubling button');
    $('#stackable-modal')
        .modal('attach events', '#stackable button');
    $('#responsive-width-modal')
        .modal('attach events', '#responsive-width button');
    $('#specifying-device-modal')
        .modal('attach events', '#specifying-device button');
    
    
    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('.page-info .header a[href$='+x+']').addClass("active");
    }
    
});



$(document).bind('scroll',function(e){
    $('.block').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});


$('a.active').click(function(){
    return false;
});

