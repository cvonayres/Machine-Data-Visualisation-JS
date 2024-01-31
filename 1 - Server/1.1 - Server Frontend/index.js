import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 32000;
const API_URL = "http://localhost:56000"
;
const __dirname = dirname(fileURLToPath(import.meta.url));
const pathIndex = __dirname + "/views/index.ejs"

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the main page
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/index`);
    console.log(response);
    res.render(pathIndex, { posts: response.data });
  } catch (error) {
    if (error.code === "ECONNREFUSED"){
      console.log("Database Server is not responding");
      res.render(pathIndex);
    }
    console.log(error.code);
  }
});
  
app.listen(port, () => {
  console.log(`Backend server for the front-end is running on http://localhost:${port}`);
});
  