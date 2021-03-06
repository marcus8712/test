d3.csv("/test/data/table.csv", function(error, data) {
    var thead = d3.select("#tableOne").append("thead").append("tr");
    var tbody = d3.select("#tableOne").append("tbody");
    
    var numberOfRows = data.length, // we can easily get the number of rows (excluding the title row)
        columns = Object.keys( data[0] ),  // then taking the first row object and getting an array of the keys
        numberOfCOlumns = columns.length - 2;  // allows us to get the number of columns

    for(var i=1; i<= numberOfCOlumns; i++){
        tbody.append("tr").attr("class", "row" + i);
    }
    
    d3.select("#tableOne tfoot tr th").attr("colspan", numberOfCOlumns +2 );
    
    data.forEach(function(d) {
        
        // Checkbox
        if(d.id == "checkbox" && d.active == "yes"){
            var th = thead.append("th");
            var checkbox = th.append("div").attr("class", "ui checkbox");
                checkbox.append("input").attr("type", "checkbox");
                checkbox.append("label");
            
            for(var i=1; i<= numberOfCOlumns; i++){
                var tr = d3.select("#tableOne tr.row" + i);
                var td = tr.append("td");
                var checkbox = td.append("div").attr("class", "ui checkbox");
                checkbox.append("input").attr("type", "checkbox");
                checkbox.append("label");
            }
        }
        
        
        // Star
        if(d.id == "star" && d.active == "yes"){
            var th = thead.append("th");
            for(var i=1; i<= numberOfCOlumns; i++){
                var tr = d3.select("#tableOne tr.row" + i);
                var td = tr.append("td");
                var rating = td.append("div")
                                .attr("class", "ui star rating")
                                .attr("data-max-rating", "1");
            }
        }
        
        
        // Dots
        if(d.id == "status_dot" && d.active == "yes"){
            var th = thead.append("th");
            for(var i=1; i<= numberOfCOlumns; i++){
                var tr = d3.select("#tableOne tr.row" + i);
                var td = tr.append("td");
                var rating = td.append("div")
                                .attr("class", "ui star rating")
                                .attr("data-max-rating", "1");
            }
        }
        
        // Star
        
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
