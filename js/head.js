d3.csv("/test/data/head.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
        var dselect = d3.select("head");
        var dselectBody = d3.select("body");
        dselectID = dselect.attr("id");
        
        //Title
        if(d.id == dselectID) dselect.append("title").text(d.title);
        
        //Charset
        if(d.id == "charset") dselect.append("meta").attr("charset", d.charset);
        
        //Meta
        if(d.id == "meta") dselect.append("meta").attr("name", d.name).attr("content", d.content);
        
        
        if(dselectID == "home"){
            
            //Icon
            if(d.id == "icon") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", d.href);

            //Link
            if(d.id == "css") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", d.href);

            //JS
            if(d.id == "jquery" || d.id == "modernizr") dselect.append("script").attr("src", d.href);
                
            if(d.id == "js") dselectBody.append("script").attr("src", d.href);
            
        }
        else{
            
            //Icon
            if(d.id == "icon") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "../" + d.href);
            
            //Link
            if(d.id == "css") dselect.append("link").attr("rel", d.rel).attr("type", d.type).attr("href", "../" + d.href);

            //JS
            if(d.id == "jquery" || d.id == "modernizr") dselect.append("script").attr("src", "../" d.href);
                
            if(d.id == "js") dselectBody.append("script").attr("src", "../" + d.href);
            
        }
    });
})

