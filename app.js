const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    const thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    const posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My favorite ramen noodles", author: "Pork bone soy sauce noodles"},
        {title: "I live in", author: "Osaka"}
    ];

    res.render("posts.ejs", {posts});
})
app.listen(3000, function(){
    console.log("Server has started!");
});