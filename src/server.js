// Switchboard where everything is guided
// Seperation of concerns

require("dotenv").config();
require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
const bookRouter = require("./books/routes");
app.use(bookRouter);

// app.use("/", express.static("cats"));

app.listen(5001, () => 
console.log(`Server is listening on port ${port}`));

// =====Errors encountered so far=====
// ERROR: Refused by server: Server may not be live. Restart server
// ERROR: Connection forcibly closed: Check if object being posted is unique. Restart server
// ERROR: Connection forcibly closed: Check if variables are the same. Restart server
// ERROR: 404 Not Found: Check route url and request