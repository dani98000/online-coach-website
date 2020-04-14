const express = require("express");
const path = require("path");
const hbs = require("hbs");

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/join", (req, res) => {
  res.render("join");
});

app.get("/price", (req, res) => {
  res.render("price");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
