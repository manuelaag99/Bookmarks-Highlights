const express = require("express");
const bodyParser = require("body-parser");

const entriesRoutes = require("./routes/entries-routes");
const HttpError = require("./models/http-error");
const usersRoutes = require("./routes/users-routes");


const app = express();

app.use(bodyParser.json());

app.use("/api/entries", entriesRoutes);
app.use("/api/users", usersRoutes);

app.use(function (req, res) {
    const error = new HttpError("Sorry, this page was not found", 404);
    throw error
});

app.use((error, req, res, next) => {
    if (res.headerSent) return next(error)
    res.status(error.code || 500)
    res.json({message: error.message || "An unknown error occurred"})
});

app.listen(3000, function (req, res) {
    console.log("Your server is running on port 3000")
});