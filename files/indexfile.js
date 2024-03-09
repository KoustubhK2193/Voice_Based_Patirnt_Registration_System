const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")
const app = express();
const port = 3000;

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Project", { useNewUrlParser: true })

const projectschema = new mongoose.Schema({
    fname: String,
    lname: String,
    age:Number,
    gender: String,
    bloodgroup: String,
    phoneno1: String,
    phoneno2: String,
    address1: String,
    reason: String,
    Medical_History: String,
    registree_name: String,
    Your_realtion: String
});

const project = mongoose.model('project', projectschema);

app.use(express.static("files"))
app.use('/static', express.static("static"));
app.use(express.urlencoded())

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname,"HTML_Files/index.html"))
})

app.post("/", (req, res) =>
{
    var userData=new project(req.body)
    res.sendFile(path.join(__dirname,"HTML_Files/patient_section.html"))
    userData.save()
})

app.listen(port, () =>
{
    console.log("Server is started on port 3000")
})