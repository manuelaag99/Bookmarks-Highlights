require("dotenv").config();

const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const booksRoutes = require("./routes/books-routes");
const entriesRoutes = require("./routes/entries-routes");
const HttpError = require("./models/http-error");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
    next();
});

app.use("/api/books", booksRoutes);
app.use("/api/entries", entriesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res) => {
    const error = new HttpError("Sorry, this page was not found", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (req.file) {
        fs.unlink(req.file.path, (err) => {
            console.log(err)
        });
    }
    if (res.headerSent) return next(error)
    res.status(error.code || 500)
    res.json({message: error.message || "An unknown error occurred"})
});

mongoose.set("strictQuery", false);
mongoose.connect(
    "mongodb+srv://" + process.env.MONGODBUSERNAME +  ":" + process.env.MONGODBPASSWORD + "@cluster0.flg1i8i.mongodb.net/bandhsdb?retryWrites=true&w=majority").then(() => app.listen(3000, function (req, res) {
    console.log("Your server is running on port 3000")
})).catch(err => console.log(err));