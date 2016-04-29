function toText(cod){
    var colS = "";
    if (cod == 1) colS = "one";
    else if(cod == 2) colS ="two";
    else if(cod == 3) colS ="three";
    else if(cod == 4) colS ="four";
    else if(cod == 5) colS ="five";
    else if(cod == 6) colS ="six";
    else if(cod == 7) colS ="seven";
    else if(cod == 8) colS ="eight";
    else if(cod == 9) colS ="nine";        
    else if(cod == 10) colS ="ten";
    else if(cod == 11) colS ="eleven";
    else if(cod == 12) colS ="twelve";
    else if(cod == 13) colS ="thirteen";
    else if(cod == 14) colS ="fourteen";
    else if(cod == 15) colS ="fifteen";
    else if(cod == 16) colS ="sixteen";
    return colS;
}

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
        
        if(d.id == "section") container.append("div").attr("class","section").text(d.title);
        
        //Block
        if(d.id == "block"){
            
            var block = container.append("div").attr("class","block");
            
            if(d.align) block.attr("data-align", d.align);
            if(d.blockSize) block.attr("data-width", d.blockSize);
            if(d.shortcut) block.attr("id", d.shortcut);
            
            //Title
            if(d.title) {
                var title = block.append("div").attr("class","title");
                title.text(d.title);
            }
            
            //Description
            if(d.description) {
                var paragraph = block.append("p");
                paragraph.html(d.description);
                
                //Size
                if(d.descriptionSize) { 
                    paragraph.attr("data-width", d.descriptionSize);
                }
                else {
                    paragraph.attr("data-width", "small");
                } 
            }
                
            //Auto Generate Grid
            if(d.columnOfRow){
                var column = toText(d.columnOfRow);
                
                //Option Grid
                if(d.optionGrid) {
                    var grid = block.append("div").attr("class","ui " + column + " column " + d.optionGrid + " grid");
                }
                else {
                    var grid = block.append("div").attr("class","ui " + column + " column grid");
                }
                
                //Row
                for(i=1; i<=parseInt(d.row); i++){
                    var row = grid.append("div").attr("class","row");
                    
                    //Column
                    for(j=1; j<=parseInt(d.columnOfRow); j++){
                        row.append("div").attr("class","column");
                    }
                }
            }
            
            //Generate ui grid
            else{
                    
                //Option Grid
                if(d.optionGrid) {
                    var grid = block.append("div").attr("class","ui " + d.optionGrid + " grid");
                }
                else {
                    var grid = block.append("div").attr("class","ui grid");
                }
                
                grid.html(d.content);
            }
            
            //Modal
            if(d.modal) {
                var btn = title.append("button").attr("class","ui round icon button");
                btn.append("i").attr("class","icon code");
                
                var modal = block.append("div").attr("class","ui modal").attr("id", d.shortcut + "-modal");
                modal.append("i").attr("class","close icon");
                var modalContent = modal.append("div").attr("class","content");
                modalContent.append("h6").text(d.title);

                modalContent.append("pre").append("code").attr("class","html hljs xml").text(d.content);

                block.append("script").html("$('#" + d.shortcut + "-modal').modal('attach events', '#" + d.shortcut + " button');");  
            }
            
            
            
        }
        
        if(d.id == "column"){
            var col = d3.select("#"+ d.shortcut + " .column");
            if(d.pPosition){
                
            }
            
            if(d.pContent) col.append("p").html(d.pContent);
            if(d.iContent) col.append("img").attr("src",d.iContent);
            if(d.content) col.append("div").html(d.content);
        }
        

    });
})

