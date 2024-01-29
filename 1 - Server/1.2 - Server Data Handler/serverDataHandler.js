import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 56000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/index", (req, res) =>{
    res.json({ name: test,});
})

app.listen(port, () => {
    console.log(`Backend server for the data handling is running on http://localhost:${port}`);
});
  