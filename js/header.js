d3.csv("/test/data/header.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
        var dselect = d3.select("head");
        
        //Title
        if(d.id == "title") dselect.append("title").text(d.title);
        
        //Charset
        if(d.id == "charset") dselect.append("meta").attr("charset", d.charset);
        
        //Meta
        if(d.id == "meta") dselect.append("meta").attr("name", d.name).attr("content", d.content);
        
        //Icon
        if(d.id == "icon") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", d.href);
        
        //Link
        if(d.id == "css") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", d.href);
        
        //JS
        if(d.id == "js") dselect.append("script").attr("src", d.href);
        
    });
})

