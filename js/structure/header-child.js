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
        if(d.id == "logo") logo.append("img").attr("src", "../img/" + d.href); 
        if(d.id == "wave") pageInfo.append("img").attr("src", "../img/" + d.href);
        
        
        
        //Left Menu
        if(d.id == "left"){
            var itemLeft = leftMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            if(d.shortcut == "intro") itemLeft.append("a").attr("href", "../").text(d.content);
            else { 
                if(d.shortcut == parent)itemLeft.append("a").attr("class","active").text(d.content);
                else itemLeft.append("a").attr("href", "../" + d.shortcut + "/" + d.href).text(d.content);
            }
        }
        
        //Right Menu
        if(d.id == "right"){
            var itemRight = rightMenu.append("li").attr("class","item").attr("data-link", d.shortcut);
            
            if(d.shortcut == parent) itemRight.append("a").attr("class","active").text(d.content);
            else itemRight.append("a").attr("href", "../" + d.shortcut + "/" + d.href).text(d.content);    
        
        }
        
        
        //Page Info
        if(d.id == "page"){
            if(d.shortcut == parent){
                
                if(d.href == child) pageHeader.append("a").attr("class","active").text(d.content);
                else pageHeader.append("a").attr("href", d.href).text(d.content);
            }
        }
        
        

    });
})

