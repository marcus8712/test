 
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

$(".hexagon-loading").append(loading);


// Navbar
var navbar ="";
navbar +=" <div class=\"navbar\">";
navbar +="     <div class=\"logo\">";
navbar +="         <img src=\"/test/img/connected.svg\">";
navbar +="     <\/div>";
navbar +="     <div class=\"navbar-content\">";
navbar +="         <ul class=\"menu leftMenu\">";
navbar +="             <li class=\"item\" data-link=\"intro\"><a href=\"/test\">intro</a></li>";

if(page == "grid" || page == "layout") navbar +="<li class=\"item\" data-link=\"structure\"><a class=\"active\">structure</a></li>";
else navbar +="<li class=\"item\" data-link=\"structure\"><a href=\"/test/structure/layout\">structure</a></li>";

if(page == "color" || page == "typo" || page == "icon") navbar +="<li class=\"item\" data-link=\"style\"><a class=\"active\">styles</a></li>";
else  navbar +="<li class=\"item\" data-link=\"style\"><a href=\"/test/style/color\">styles</a></li>";

navbar +="             <li class=\"item\" data-link=\"component\"><a href=\"/test/component\">components</a></li>";
navbar +="         <\/ul>";
navbar +="         <ul class=\"menu rightMenu\">";
navbar +="             <li class=\"item\" data-link=\"state\"><a href=\"/test/state\">states</a></li>";
navbar +="             <li class=\"item\" data-link=\"pattern\"><a href=\"/test/pattern\">app patterns</a></li>";
navbar +="             <li class=\"item\" data-link=\"sample\"><a href=\"/test/sample\">samples</a></li>";
navbar +="             <li class=\"item\" data-link=\"download\"><a href=\"/test/download\">download</a></li>";
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

if(page == "grid" || page =="layout"){
    pageInfo += "       <a data-link=\"layout\" href=\"layout\">#layouts</a>";
    pageInfo += "       <a data-link=\"grid\" href=\"grid\">#grids</a>";
}

if(page == "color" || page == "typo" || page == "icon"){
    pageInfo += "       <a data-link=\"color\" href=\"color\">#colors</a>";
    pageInfo += "       <a data-link=\"typo\" href=\"typo\">#typo</a>";
    pageInfo += "       <a data-link=\"icon\" href=\"icon\">#icons</a>";
}
pageInfo += "   <\/div>";
pageInfo += "   <img src=\"/test/img/wave.svg\">";
pageInfo += "<\/div>";

$("#header").append(pageInfo);
