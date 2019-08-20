var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
// var PORT = 3000;
var PORT = process.env.PORT || 3000; 
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true })); // ?
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/rNewsScraper";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// mongoose.connect("mongodb://localhost/rNewsScraper", { useNewUrlParser: true });

app.get("/", function(req, res) 
{
  db.Article.find({}).then(function(dbArticles) 
  {
    res.render("index", {
      article: dbArticles
    });
  }).catch(function(err) {
    res.json(err);
  });
});


app.get("/scrape", function(req, res) 
{
  // when should this happen?
  // every time page is loaded, or when user clicks button?
  axios.get("https://old.reddit.com/r/news/").then(function(response) {

    var $ = cheerio.load(response.data);

    $("a.title").each(function(i, element) {
      
      var result = {};

      result.title = $(this).text();
      result.link = $(this).attr("href");

      db.Article.findOne({title: result.title}).then(function(dbArticle){
 
        
        if(dbArticle === null)
        {

          db.Article.create(result).then(function(dbArticle)
          {
            //console.log(dbArticle);
          })
          .catch(function(err) {
            console.log(err);
          });
        }

      }).catch(function(err) {
        console.log(err);
      });

    });

  });
});


app.post("/article/:id", function(req, res) 
{
  db.Note.create(req.body).then(function(dbNote) {
      return db.Article.findOneAndUpdate({ _id: req.params.id }, 
        {$push: { notes: dbNote._id }}, { new: true });
    })
    .then(function(dbArticle) 
    {
      res.render("article", {
        article: dbArticle
      });
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/article/:id", function(req, res) 
{
  db.Article.findOne({ _id: req.params.id })
    .populate("notes").then(function(dbArticle) {

      res.render("article", {
        article: dbArticle
      });

    }).catch(function(err) {
      res.json(err);
    });
});

  app.delete("/note/:id", function(req, res) 
  {
    //  _id: req.params.id 
    db.Note.findOneAndDelete({ _id: req.params.id })
    .then(function(dbNoteRemoved) {

      res.json(dbNoteRemoved);
      
    });
  });

app.listen(PORT, function() 
{
  console.log("App running on port " + PORT + "!");
});
