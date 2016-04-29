d3.csv("/test/data/header.csv", function(error, data) {
    
    var page = d3.select("head").attr("id");
        var str = page.split("-");
        if(str){
            var parent = str[0];
            var child = str[1];
        }

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
            
            if(d.shortcut == "intro") {
                var linkLeft = itemLeft.append("a").attr("href", "../");
                linkLeft.attr("class","active");
            }
            else { 
                var linkLeft = itemLeft.append("a").attr("href", "../" + d.shortcut + "/" + d.href);
                
                if(d.shortcut == parent){
                    linkLeft.attr("class","active");
                }
            }
            
            linkLeft.text(d.content);
        }
        
        //Right Menu
        if(d.id == "right"){
            var itemRight = rightMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            var linkRight = itemRight.append("a").attr("href", "../" + d.shortcut + "/" + d.href);    
            
            if(d.shortcut == parent){
                linkRight.attr("class","active");
            }
            
            linkRight.text(d.content);
        }
        
        
        //Page Info
        if(d.id == "page"){
            if(d.shortcut == parent){
                var itemPage = pageHeader.append("a").attr("href", d.href);
                itemPage.text(d.content);
                
                if(d.href == child) itemPage.attr("class","active");
            }
        }
        
        

    });
})

