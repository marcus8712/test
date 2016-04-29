d3.csv("/test/data/header.csv", function(error, data) {
    
    var header = d3.select("#header");
    
    var navbar = header.append("div").attr("class","navbar");
        var logo = navbar.append("div").attr("class","logo");
        var navbarContent = navbar.append("div").attr("class","navbar-content");
            var leftMenu = navbarContent.append("ul").attr("class","menu leftMenu");
            var rightMenu = navbarContent.append("ul").attr("class","menu rightMenu");
            var mobileMenu = navbarContent.append("ul").attr("class","menu mobileMenu");
    
    var pageInfo = header.append("div").attr("class","page-info");
            var pageHeader = pageInfo.append("div").attr("class","ui header");
    
    data.forEach(function(d) {
        
        
        //Logo
        if(d.id == "logo") logo.append("img").attr("src", "img/" + d.href); 
        if(d.id == "wave") pageInfo.append("img").attr("src", "img/" + d.href);
        
        
        
        //Left Menu
        if(d.id == "left"){
            var itemLeft = leftMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            if(d.shortcut == "intro") {
                var linkLeft = itemLeft.append("a").attr("class","active");
            }
            else { 
                var linkLeft = itemLeft.append("a").attr("href", d.shortcut + "/" + d.href);
                
            }
            
            
            linkLeft.text(d.content);
        }
        
        //Right Menu
        if(d.id == "right"){
            var itemRight = rightMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            var linkRight = itemRight.append("a").attr("href", d.shortcut + "/" + d.href);    
            
            linkRight.text(d.content);
        }
        
        
        //Page Info
        if(d.id == "page"){
            if(d.shortcut == "intro"){
                pageHeader.append("a").attr("class","active").text(d.content);
            }
        }
        
        

    });
})

