d3.csv("/test/data/header.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
        
        var dselect = d3.select("head");
        dselect.append("meta").attr("name", d.name).attr("content", d.content);
    });
})

