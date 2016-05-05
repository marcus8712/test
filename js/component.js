$(window).load(function() {
    
    // Page Info
    $('meta[name=description]').attr("content","Design Standards is a carefully crafted design developed by Hoiio UX Team.");
    $('meta[name=keywords]').attr("content","design, standards, hoiio, uxdesign, user interface, semantic");
    $('meta[name=author]').attr("content","Hoiio UX Team");
    
    // Animate loader off screen
    $("body > .hexagon-loading").fadeOut("slow");
    
    var hash = window.location.hash;
    $('html,body').animate({
        'scrollTop' : $(hash).offset().top - 70
    },'slow');
    
    

});

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
    
    //Standard Modal
    $('#demo-modal')
        .modal('attach events', '#demo')
    ;
    
    $('#demo-image-modal')
        .modal('attach events', '#demo-image')
    ;
    
    //Basic Modal
    $('.basic.modal')
        .modal('attach events', '#basic-button')
    ;
    
    //Fullscreen Modal
    $('.fullscreen.modal')
        .modal('attach events', '#fullscreen-button')
    ;
    
    //Small Modal
    $('#small-modal')
        .modal('attach events', '#small-button')
    ;
    
    //Large Modal
    $('.large.modal')
        .modal('attach events', '#large-button')
    ;
    
    //Autofocus Modal
    $('#autofocus-false-modal')
        .modal('setting', 'autofocus', false)
        .modal('attach events', '#autofocus-false')
    ;
 
    $('#autofocus-true-modal')
        .modal('attach events', '#autofocus-true')
    ;
    
    //Couple Modal
    $('.coupled.modal')
      .modal('setting', ' allowMultiple', false)
    ;
    // Click the button to show first modal.
    $('.first.modal')
      .modal('attach events', '.coupled.button')
    ;
    // Click action button in first modal to show second modal.
    $('.second.modal')
      .modal('attach events', '.first.modal .button')
    ;
    
    //Closable Modal
    $('#closable-false-modal')
        .modal('setting', 'closable', false)
        .modal('attach events', '#closable-false')
    ;
    
    //Duration
    $('.duration.modal')
        .modal('setting', 'duration', 100)
        .modal('attach events', '.duration.button')
    ;
    
    //Transition
    $('#transitions')
      .dropdown({
        onChange: function(value) {
          $('.demo.modal')
            .modal('setting', 'transition', value)
            .modal('show')
          ;
        }
      })
    ;
    
    
    //Event Modal
    $('#event-modal')
      .modal({
        onVisible    : function(){
          window.alert('Show');
        }, 
        onDeny    : function(){
          window.alert('Wait not yet!');
          return false;
        },
        onApprove : function() {
          window.alert('Approved!');
        }
      })
      .modal('attach events', '#event-button', 'show')
    ;
    

    
    /*--------------------
        Navigation
    ----------------------*/
        
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
    $('#button-modal')
        .modal('attach events', '#button-trigger button');
    
    
    
    // Set Active to Page Header
    
    var hash = window.location.href.split("#")[1];
    
    if(hash) {
        var uri = window.location.href.split("#")[0];
        var x = uri.match(/.*\/(.*)$/)[1];
    }
    else var x = window.location.href.match(/.*\/(.*)$/)[1];
    
    $('.page-info .header a[href$='+x+']').addClass("active").removeAttr("href");

    
});



$(document).bind('scroll',function(e){
    $('#body > .container > .block').each(function(){
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

