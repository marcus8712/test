d3.csv("/test/data/header.csv", function(error, data) {
    
    var page = d3.select("head").attr("id");

    var header = d3.select("#header");
    
    var navbar = header.append("div").attr("class","navbar");
        var logo = navbar.append("div").attr("class","logo");
        var navbarContent = navbar.append("div").attr("class","navbar-content");
            var leftMenu = navbarContent.append("ul").attr("class","menu leftMenu");
            var rightMenu = navbarContent.append("ul").attr("class","menu rightMenu");
            var mobileMenu = navbarContent.append("ul").attr("class","menu mobileMenu");
    
    var pageInfo = header.append("div").attr("class","page-info");
            var pageHeader = pageInfo.append("div").attr("class","ui header");
    
    var source;
    data.forEach(function(d) {
        
        //Source
        if(d.source) source = "/" + d.source + "/";
        
        //Logo
        if(page == "intro"){
            if(d.id == "logo") logo.append("img").attr("src", "img/" +d.href);
            if(d.id == "wave") pageInfo.append("img").attr("src", "img/" +d.href); 
        }
        else{
            if(d.id == "logo") logo.append("img").attr("src", "../img/" + d.href); 
            if(d.id == "wave") pageInfo.append("img").attr("src", "../img/" + d.href);
        }
        
        //Left Menu
        if(d.id == "left"){
            var itemLeft = leftMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            if(d.href != null){
                var linkLeft = itemLeft.append("a").attr("href", source + d.shortcut + "/" + d.href);    
            }
            else{
                
                if(d.shortcut != "intro") {
                    var linkLeft = itemLeft.append("a").attr("href", source + d.shortcut + "/");
                }
                else { 
                    var linkLeft = itemLeft.append("a").attr("href", source);
                }
            }
            
            linkLeft.text(d.content);
        }
        
        //Right Menu
        if(d.id == "right"){
            var itemRight = rightMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            if(d.href != null){
                var linkRight = itemRight.append("a").attr("href", source + d.shortcut + "/" + d.href);    
            }
            else{
                
                var linkRight = itemRight.append("a").attr("href", source + d.shortcut + "/");
            }
            
            linkRight.text(d.content);
        }
        
        
        //Page Info
        if(d.id == "page"){
            var subpage = d.shortcut + "-" + d.href;
            if(page == subpage){;
                var itemPage = pageHeader.append("a").attr("href", d.href);
                itemPage.text(d.content);
            }
        }
        
        

    });
})

