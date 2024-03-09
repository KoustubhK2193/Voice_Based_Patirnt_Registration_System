const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")
const app = express();
const port = 3000;

app.use(express.static("files"))
app.use('/static', express.static("static"));
app.use(express.urlencoded())

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname,"HTML_Files/index.html"))
})


app.listen(port, () =>
{
    console.log("Server is started on port 3000")
})