$(window).load(function() {
    // Animate loader off screen
    $("body > .loading").fadeOut("slow");
    
    var hash = window.location.hash;
    $('html,body').animate({
        'scrollTop' : $(hash).offset().top - 50
    },'slow');

});

$(document).ready(function() {
   
    var page = $("body > .container").data().page;
    
    // Loading
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
    
    
    // Navbar
    var navbar ="";
    navbar +=" <div class=\"navbar\">";
    navbar +="     <div class=\"logo\">";
    navbar +="         <img src=\"../img/connected.svg\">";
    navbar +="     <\/div>";
    navbar +="     <div class=\"navbar-content\">";
    navbar +="         <ul class=\"menu leftMenu\">";
    navbar +="             <li class=\"item\" data-link=\"intro\"><a href=\"../\">intro</a></li>";
    if(page == "grid" || page == "layout") {
        navbar +="             <li class=\"item\" data-link=\"structure\"><a class=\"active\">structure</a></li>";
    }
    navbar +="             <li class=\"item\" data-link=\"style\"><a href=\"../style/font\">styles</a></li>";
    navbar +="             <li class=\"item\" data-link=\"component\"><a href=\"../component/\">components</a></li>";
    navbar +="         <\/ul>";
    navbar +="         <ul class=\"menu rightMenu\">";
    navbar +="             <li class=\"item\" data-link=\"state\"><a href=\"../state/\">states</a></li>";
    navbar +="             <li class=\"item\" data-link=\"pattern\"><a href=\"../pattern/\">app patterns</a></li>";
    navbar +="             <li class=\"item\" data-link=\"sample\"><a href=\"../sample/\">samples</a></li>";
    navbar +="             <li class=\"item\" data-link=\"download\"><a href=\"../download/\">download</a></li>";
    navbar +="         <\/ul>";
    navbar +="         <ul class=\"menu mobileMenu\">";
    navbar +="         <\/ul>";
    navbar +="     <\/div>";
    navbar +=" <\/div>";
    $("#header").append(navbar);
    
    
    // Page Info
    var pageInfo ="";
    pageInfo += "<div class=\"page-info\">";
    pageInfo += "   <div class=\"ui header\">";
        
        if(page == "grid") {
            pageInfo += "       <a class=\"active\">#grids</a>";
            pageInfo += "       <a href=\"layout\">#layouts</a>";
        }
        else if(page == "layout") {
            pageInfo += "       <a href=\"grid\">#grids</a>";
            pageInfo += "       <a class=\"active\">#layouts</a>";
        }
    pageInfo += "   <\/div>";
    pageInfo += "   <img src=\"../img/wave.svg\">";
    pageInfo += "<\/div>";
    
    $("#header").append(pageInfo);
    
    
    
        
    //Modal Trigger
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
