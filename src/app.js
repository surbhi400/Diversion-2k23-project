const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
require("./db/conn");
const port = process.env.PORT || 8000

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path))

//routing
app.get("", (req, res)=> {
    res.render("index")
})
app.get("/signup", (req, res)=> {
    res.render("signup")
})
app.get("/login", (req, res)=> {
    res.render("login")
})
// app.get("*", (req, res)=> {
//     res.send("404 error page oops")
// })

app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})