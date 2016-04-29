d3.csv("/test/data/header.csv", function(error, data) {
    var count;
    count = 0;
    var dselect = d3.select("head");
    var dselectID = dselect.attr("id");
    
    var header = d3.select("#header");
    var navbar = header.append("div").attr("class","navbar");
    var pageInfo = header.append("div").attr("class","page-info");
    var pageHeader = pageInfo.append("div").attr("class","ui header");
    
    var logo = navbar.append("div").attr("class","logo");
    var navbarContent = navbar.append("div").attr("class","navbar-content");
    var leftMenu = navbarContent.append("ul").attr("class","menu leftMenu");
    var rightMenu = navbarContent.append("ul").attr("class","menu rightMenu");
    var mobileMenu = navbarContent.append("ul").attr("class","menu mobileMenu");
   
    data.forEach(function(d) {
        
        //Logo
        if(dselectID == "home"){
            if(d.id == "logo") logo.append("img").attr("src", d.href); 
        }
        else{
            if(d.id == "logo") logo.append("img").attr("src","../" + d.href); 
        }
        
        //Left Menu
        if(d.id == "left"){
            var itemLeft = leftMenu.append("li").attr("class","item");
            var linkLeft = itemLeft.append("a").attr("href", d.href);
            linkLeft.text(d.name);
        }
        
        //Right Menu
        if(d.id == "right"){
            var itemRight = rightMenu.append("li").attr("class","item");
            var linkRight = itemRight.append("a").attr("href", d.href);
            linkRight.text(d.name);
        }
        
        
        //Page Info
        if(d.id == "page"){
            var itemPage = pageHeader.append("a").attr("href", d.href);
            itemPage.text(d.content);
        }
        
        //Wave
        if(dselectID == "home"){
            if(d.id == "wave") pageInfo.append("img").attr("src", d.href); 
        }
        else{
            if(d.id == "wave") pageInfo.append("img").attr("src","../" + d.href); 
        }

    });
})

