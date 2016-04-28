d3.csv("/standards/source/data/staff.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
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
    });
})


d3.csv("/standards/source/data/plan.csv", function(error, data) {
    var count;
    count = 0;
   
    data.forEach(function(d) {
        var main = d3.select(".subscription .list").append("div").attr("class", "plan item");
        
        var content = main.append("div").attr("class", "content");
        var app = main.append("div").attr("class", "app");
        
        
        content.append("div").attr("class", "header").text(d.name);
        if(d.link1) { 
            app.append("img").attr("class", "ui avatar image").attr("src",d.link1); 
        }
        
        if(d.link2) { 
            app.append("img").attr("class", "ui avatar image").attr("src",d.link2); 
        }
        
        if(d.link3) { 
            app.append("img").attr("class", "ui avatar image").attr("src",d.link3); 
        }
       
        count = count + 1;
        
        if (count == 6) throw count;
    });
})


/*
<img class="ui avatar image" src="../img/square-image.jpg">
                                            <span>Username</span>
var dataset = [d.avatar,d.phone,d.role_portal,d.subscriptions,d.last_access_portal];
        d3.select("table tbody").append("tr").attr("id", 'staff' + d.id);
        d3.select(("#staff" + d.id),function()
            .append("td").text(d.first_name)
            .enter()
            .append("td").text(d.last_name);
id avatar	first_name	last_name	phone	role_portal	subscriptons	last_access_portal
d3.select("#"+ d.id).append("td").text(d.first_name + d.last_name);
        d3.select("table tbody tr").append("td").text(d.phone);

*/