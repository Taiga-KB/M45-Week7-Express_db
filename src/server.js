const express = require("express");
const app = express();

// Uniform Resource Locator
// Route for different web pages
app.use("/", express.static("cats"));

// app.use("/about", express.static("/cats/about.html"));
// app.use("/cats", express.static(""));


app.listen(5001, () => console.log("Server is listening on port 5001"));

// Get / Post / Put / Delete