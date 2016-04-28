$(document).ready(function() {
    
    
    
    
    
    /*--------------------
        DROPDOWN
    ----------------------*/ 
    
    // Standard
    $('.ui.dropdown').dropdown();
    
    $('.ui.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle')
    ;
    
    
    /*--------------------
        PROGRESS
    ----------------------*/ 
    
    // Standard
    var 
    $progress = $('.ui.progress').not('.success, .error, .warning'),
        $buttons = $('.example .increment.button, .example .decrement.button'),
        $stateProgress    = $('.ui.success.progress, .ui.warning.progress, .ui.error.progress');
    
    $stateProgress
      .progress('set progress', 100)
    ;
    
    $progress
      .each(function() {
        $(this)
          .progress({
            showActivity : false,
            random       : {
              min : 5,
              max : 15
            },
            percent      : Math.floor(Math.random() * 60) + 5
          })
        ;
      })
    ;
    
    $buttons.on('click', function() {
        var $progress = $(this).closest('.example').find('.ui.progress')
        ;
        if( $(this).hasClass('increment') ) {
          $progress.progress('increment');
        }
        else {
          $progress.progress('decrement');
        }
      })
    ;
    
    
    /*--------------------
        ACCORDION
    ----------------------*/ 
    
    $('.ui.accordion')
        .accordion()
    ;
    
    
    /*--------------------
        MENU
    ----------------------*/ 
   
    /*--------------------
        MESSAGE
    ----------------------*/ 
    
    // Transition
    $('.message .remove')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
    
    /*--------------------
        TABLE
    ----------------------*/ 
    
    
    /*--------------------
        MODAL
    ----------------------*/ 
    
    $('.present.modal')
        .modal('attach events', '#clearing-row button')
    ;
    
    /*--------------------
        Navigation
    ----------------------*/
    
    // Set Active
    function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    if(x){
        $('a[href$='+x+']').addClass("active").attr('href', '').css({'cursor': 'pointer', 'pointer-events' : 'none'});
    }
    else{
        $('a[href$=intro]').addClass("active").attr('href', '').css({'cursor': 'pointer', 'pointer-events' : 'none'});
    } 
   
 
});



$(window).load(function() {
    // Animate loader off screen
    $(".hoiio.loading").fadeOut("slow");

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

hljs.initHighlightingOnLoad();

$('a.active').click(function(){
    return false;
});
          
