d3.csv("/test/data/grid.csv", function(error, data) {
    var count;
    count = 0;
    var dselect = d3.select("head");
    var dselectID = dselect.attr("id");
    d3.select("body > .container").attr("data-page", dselectID);
    
    var body = d3.select("#body");
    var container = body.select(".container");
    
    
    data.forEach(function(d) {
        
        
        
        if(d.id == "alignAll") container.attr("data-align", d.align);
        
        if(d.id == "section") container.append("div").attr("class","section").text(d.text);
        
        //Block
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
                var paragraph = block.append("p");
                paragraph.text(d.description);
                
                //Size
                if(d.descriptionSize) paragraph.attr("data-width", d.descriptionSize);
                
            }
                
            //Grid
            var grid = block.append("div").attr("class","ui grid");
            
            //Column
            if(d.column){
               grid.attr(d.column + " column stackable");
            }
            
            
            
        }
            
        

    });
})

