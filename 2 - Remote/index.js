import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 20000;
const API_URL = "http://localhost:66000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the main page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

  
App.listen(port, () => {
  console.log(`On machine server is running on http://localhost:${port}`);
});
  