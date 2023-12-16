// server initiate
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
// activate server 3000
app.listen(3000, () => {
  console.log("Server started port no 3000");
});
// routes
app.get("/", (req, res) => {
  res.send("hello this is my first route");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submit success");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfuk");
  })
  .catch((err) => {
    console.log("err");
  });
