var express =  require("express");
//var empsRouter = require("./routes/emps");
//var adminRouter = require("./routes/admin");
//var config = require("config");

//var port =   parseInt(config.get("port"));
var app =  express();

console.log("shhhhhhhu");


//app.use("/emps", empsRouter);
//app.use("/admin", adminRouter);

app.listen(9999, ()=>{
    console.log("Server Started..");
});



