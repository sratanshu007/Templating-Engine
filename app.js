const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const users = [
    { name: "Ram", online: true },
    { name: "Shyam", online: false },
    { name: "ABC", online: true },
];

app.get("/", (req, res) => {
    res.render("index", { users: users });
});

app.get("/form",(req, res)=> {
    res.render("form");
});

app.post("/register", (req,res)=> {
    const{name, online} = res.body;
    users.push({name, online:online == "true"});
    res.redirect("/");
});

app.listen(3000, () => 
    console.log("server started at http://localhost:3000")
);