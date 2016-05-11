d3.csv("/test/data/table.csv", function(error, data) {
    var thead = d3.select("#test").append("thead").append("tr");
    var tbody = d3.select("#test").append("tbody");
    //var tfoot = d3.select("#test").append("tfoot").append("tr");
    // Setup
    var i;
    for(i=1; i< 6 ; i++){
        tbody.append("tr").attr("class", "row" + i);
    }
    
    data.forEach(function(d) {
        
        /*
        var th = thead.append("th");
        
        var td = tbody.append("td");
        
        var tf = tfoot.append("th");
        
        if(d.id == "checkbox" && d.row1 == "yes"){
            var checkbox = th.append("div").attr("class", "ui checkbox");
            checkbox.append("input").attr("type", "checkbox");
            checkbox.append("label");
            
            for(i=1; i< d.length -2; i++){
                var checkbox = td.append("div").attr("class", "ui checkbox");
                checkbox.append("input").attr("type", "checkbox");
                checkbox.append("label");
            }
            
            .insert('div', '#first + *')
    .attr('id', 'second');
        }
        
        
        
        
        if(d.id == "header")
        header.append("tr").attr("id", 'staff' + d.id);
        
        var diventer = d3.select("table tbody").append("tr").attr("id", 'staff' + d.id);
        
        diventer.append("td");
        d3.select('#staff' + d.id + ' td').append("img").attr('class', 'ui avatar image').attr('src','http://marcus8712.github.io/standards/source/img/square-image.jpg');
        d3.select('#staff' + d.id + ' td').append("span").text(d.first_name + ' ' + d.last_name);
        diventer.append("td").text(d.phone);
        diventer.append("td").text(d.role_portal);
        diventer.append("td").text(d.subscriptons);
        diventer.append("td").text(d.last_access_portal);
       
        count = count + 1;
        
        if (count == 5) throw count;
        */
    });
})
