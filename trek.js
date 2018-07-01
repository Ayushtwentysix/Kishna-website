var express =require("express") 
var app =express();
// var mongoose = require("mongoose");
//var methodOverride = require("method-override");
//var expressSanitizer =require("express-sanitizer");

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//app.use(expressSanitizer());
app.use(express.static("public"));
//app.use(methodOverride("_method"));
// mongoose.connect("mongodb://localhost/trek_app");

// var blogsSchema= new mongoose.Schema({
//   blogHead: String,
//   blogDes: String,
//   img:String,
// //   date: {type: Date, default: Date.now()}
// });

// var Blogs=mongoose.model("Blogs",blogsSchema);

// app.get("/trek/login",function(req, res) {
//     res.render("login.ejs");
// })


app.get("/",function(req, res) {
    res.render("landing.ejs");
})

app.get("/home",function(req, res) {
    res.render("home.ejs");
})
app.get("/trek/treks",function(req,res){
//   Blogs.find({},function(err,AllBlogs){
//       if(err){
//           console.log("ERROR FOUND:"+err);
//       } else {
//           res.render("show_trek.ejs",{blogs:AllBlogs});
//       }
//   })
    res.render("show_trek.ejs");
});

app.get("/treks/t1",function(req, res) {
   res.render("t1.ejs"); 
});

app.get("/treks/t2",function(req, res) {
   res.render("t2.ejs"); 
})
app.get("/treks/t3",function(req, res) {
   res.render("t3.ejs"); 
})
app.get("/treks/t4",function(req, res) {
   res.render("t4.ejs"); 
})
app.get("/treks/t5",function(req, res) {
   res.render("t5.ejs"); 
})
app.get("/treks/t6",function(req, res) {
   res.render("t6.ejs"); 
})

app.get("/trek/leisure",function(req, res) {
   res.render("leisure.ejs"); 
});

app.get("/trek/rafting",function(req, res) {
   res.render("rafting.ejs"); 
});


app.get("/trek/paragliding",function(req, res) {
   res.render("paragliding.ejs"); 
});

app.get("/trek/guest",function(req, res) {
   res.render("guest.ejs"); 
});
// app.get("/trek/new",function(req,res){
//     res.render("trekNew.ejs");
// })

// app.post("/trek",function(req,res){

//   Blogs.create(req.body.blog,function(err,blog){
//     if(err){
//         res.render("/trek/new");
//     }else{
//         res.redirect("/trek");
//     }
// });
// });
   


// app.get("/trek/:id",function(req, res) {
//   Blogs.findById(req.params.id,function(err,foundBlog){
//       if(err){
//           res.redirect("/trek");
//       } else{
//           res.render("show.ejs", {blog:foundBlog});
//       }
//   })
// });







app.listen(process.env.PORT,process.env.IP,function(){
   console.log("SERVER STARTED"); 
});