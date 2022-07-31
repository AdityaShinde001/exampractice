var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Contoso</h1>"
            +"<hr/>"
            +"<h3>Welcome to Contoso, </h3>"
            +"<h3>We are one of the leading MNCs in the world in the field of cloud computing</h3>"
            +"<h3>We have 12 offices across the globe. </h3>"
            +"<h3>We want to deploy business application on public cloud with the help of Platform As A Service.</h3>"
            + "<br/>"

    );
});

var server=app.listen(9000);
console.log("Simple web app running on port 9000");