const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users-routes");
const entriesRoutes = require("./routes/entries-routes");

const app = express();

// app.use("api/users", usersRoutes);
app.use("/api/entries", entriesRoutes);

app.get("/", function (req, res) {
    res.send("Hello")
})

app.use((error, req, res, next) => {
    if (res.headerSent) return next(error)
    res.status(error.code || 500)
    res.json({message: error.message || "An unknown error occurred"})
})

app.listen(3000, function (req, res) {
    console.log("Your server is running on port 3000")
})