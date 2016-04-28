d3.csv("/test/data/body.csv", function(error, data) {
    var count;
    count = 0;
    var dselect = d3.select("head");
    var dselectID = dselect.attr("id");
    
    var body = d3.select("#body");
    var container = body.select(".container");
    
    
    
    
    
    
    var navbar = header.append("div").attr("class","navbar");
    var pageInfo = header.append("div").attr("class","page-info");
    var pageHeader = pageInfo.append("div").attr("class","ui header");
    
    var logo = navbar.append("div").attr("class","logo");
    var navbarContent = navbar.append("div").attr("class","navbar-content");
    var leftMenu = navbarContent.append("ul").attr("class","menu leftMenu");
    var rightMenu = navbarContent.append("ul").attr("class","menu rightMenu");
    var mobileMenu = navbarContent.append("ul").attr("class","menu mobileMenu");
   
    data.forEach(function(d) {
        
        if(d.id == "alignAll") container.attr("data-align", d.align);
        
        if(d.id == "section") container.append("div").attr("class","section").text(d.text);
        
        if(d.id == "block"){
            var block = container.append("div").attr("class","block");
            
            if(d.blockSize) block.attr("data-width", d.blockSize);
            if(d.shortcut) block.attr("id", d.shortcut);
            
            //Title
            if(d.title) {
                var title = block.append("div").attr("class","title");
                title.text(d.title);
            }
            
            //Show code
            if(d.showCode == "yes") {
                var btn = title.append("button").attr("class","ui round icon button");
                btn.append("i").attr("class","icon code");
            }
            
            
            //Description
            if(d.description) {
                //Size
                if(d.descriptionSize) block.append("p").attr("data-width", d.descriptionSize);
                
            }
            
            //Sub block
            if(d.subBlock)
            
            //Grid
            var grid = block.append("div").attr("class","ui grid");
            
            
            
            
            
        }
            
        
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
        if(d.page == "page"){
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

