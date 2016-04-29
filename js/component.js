$(window).load(function() {
    // Animate loader off screen
    $("body > .loading").fadeOut("slow");

});

$(document).ready(function() {
    
    
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
   
