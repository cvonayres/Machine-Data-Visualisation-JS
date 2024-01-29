import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 66000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/index", (req, res) =>{
    res.json({ name: test,});
})

app.listen(port, () => {
    console.log(`Backend server for the remote handling is running on http://localhost:${port}`);
});
  