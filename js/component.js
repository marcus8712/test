$(window).load(function() {
    // Animate loader off screen
    $("body > .loading").fadeOut("slow");

});

$(document).ready(function() {
    /*
    var hash = window.location.hash;
    $('html,body').animate({
        'scrollTop' : $("#clearing-rows-3").offset().top
    },900,'swing');
    */
    
    $('#body').fullpage();
    
    // Generate
    var loading="";
    loading += "    <section id=\"hexCont\">";
    loading += "        <div id=\"triforce1\">";
    loading += "            <div class=\"triangle triangle1\"><\/div>";
    loading += "        <\/div>";
    loading += "        <div id=\"triforce2\">";
    loading += "            <div class=\"triangle flipped triangle2\"><\/div>";
    loading += "        <\/div>";
    loading += "        <div id=\"triforce3\">";
    loading += "            <div class=\"triangle triangle3\"><\/div>";
    loading += "        <\/div>";
    loading += "        <div id=\"triforce4\">";
    loading += "            <div class=\"triangle flipped triangle4\"><\/div>";
    loading += "        <\/div>";
    loading += "        <div id=\"triforce5\">";
    loading += "            <div class=\"triangle triangle5\"><\/div>";
    loading += "        <\/div>";
    loading += "        <div id=\"triforce6\">";
    loading += "            <div class=\"triangle flipped triangle6\"><\/div>";
    loading += "        <\/div>";
    loading += "    <\/section>";
   
    $(".loading").append(loading);
    
    
    $('#clearing-rows-modal').modal('attach events', '#clearing-rows button');
    $('#specifying-row-width-modal').modal('attach events', '#specifying-row-width button');
    $('#specifying-column-width-modal').modal('attach events', '#specifying-column-width button');
    $('#special-variations-modal').modal('attach events', '#special-variations button');
    $('#centering-content-modal').modal('attach events', '#centering-content button');
    $('#vertical-alignment-modal').modal('attach events', '#vertical-alignment button');
    $('#text-alignment-modal').modal('attach events', '#text-alignment button');
    $('#floating-rows-modal').modal('attach events', '#floating-rows button');
   
});



/*
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
*/

$('a.active').click(function(){
    return false;
  });
   
