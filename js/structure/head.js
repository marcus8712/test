d3.csv("/test/data/head.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
        var head = d3.select("head");
        page = head.attr("id");
        
        //Title
        if(d.id == page) head.append("title").text(d.title);
        
        //Charset
        if(d.id == "charset") head.append("meta").attr("charset", d.charset);
        
        //Meta
        if(d.id == "meta") head.append("meta").attr("name", d.name).attr("content", d.content);
        
        
        if(page == "intro"){
            
            //Icon
            if(d.id == "icon") head.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "img/" + d.href);

            //Link
            if(d.id == "css") head.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "css/" + d.href);
        }
        else{
            
            //Icon
            if(d.id == "icon") head.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "../img/" + d.href);
            
            //Link
            if(d.id == "css") head.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "../css/" + d.href);
        }
    });
})

