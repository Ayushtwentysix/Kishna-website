var functions = require('firebase-functions');
var express =require("express") ;
var app =express();

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.app = functions.https.onRequest(app);


app.get("/",function(req, res) {
    res.render("landing.ejs");
});

app.get("/Camps-Activities",function(req, res) {
    res.render("home.ejs");
});

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

app.get("/treks/Mandi-to-PrasharLake-Bajaura-Trek",function(req, res) {
   res.render("t0.ejs"); 
});

app.get("/treks/Mandi-to-PrasharLake-Trek",function(req, res) {
   res.render("t1.ejs"); 
});

app.get("/treks/Bagi-PrasharLake-Trek",function(req, res) {
   res.render("t2.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-MchhodriMata-Trek",function(req, res) {
   res.render("t4.ejs"); 
});
app.get("/treks/PrasharLake-MchhodriMata-Trek",function(req, res) {
   res.render("t4A.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-TungaMata-Trek",function(req, res) {
   res.render("t5.ejs"); 
});
app.get("/treks/PrasharLake-TungaMata-Trek",function(req, res) {
   res.render("t5A.ejs"); 
});
app.get("/treks/Bagi-PrasharLake-ShehlaMata-Trek",function(req, res) {
   res.render("t6.ejs"); 
});
app.get("/treks/PrasharLake-ShehlaMata-Trek",function(req, res) {
   res.render("t6A.ejs"); 
});
// app.get("/treks/t6A",function(req, res) {
//    res.render("t6A.ejs"); 
// })
app.get("/trek/leisure",function(req, res) {
   res.render("leisure.ejs"); 
});

app.get("/trek/rafting",function(req, res) {
   res.render("rafting.ejs"); 
});


app.get("/trek/paragliding",function(req, res) {
   res.render("paragliding.ejs"); 
});

app.get("/trek/guest-house",function(req, res) {
   res.render("guest.ejs"); 
});

app.get("/sitemap.xml",function(req, res) {
    res.render("sitemap.xml");
});

