require("dotenv").config();
require("./db/connection");
const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const port = process.env.PORT || 5001;
const Book = require("./books/model");

// Task: Create other routes for different requests?

// CREATE / READ / UPDATE / DELETE 
// POST / GET / PUT / DELETE

// URL: Uniform Resource Locator: Domain/book/
// ROUTE: A pathway to find a particular resource

// Route for different web pages
app.use(express.json());
app.use("/", express.static("cats"));

// =====Find all books route=====
// GET: Fetches requested information
// Get will map to READ Function
// Get requests don't have bodies
app.get("/books/findallbooks", async (request, response) => {
    const allBooks = await Book.find({})

    const successResponse = {
        message: "All books found: Success",
        allBooks: allBooks,
    };

    response.send(successResponse);
})

// =====Find specific book route=====
// Find books by the same author
app.get("/books/findabook", async (request, response) => {
    const findBook = await Book.find({author: request.body.author})
    // Body snippet:
    // {
    //     "author": "J. R. R. Tolkien"
    // }

    // Hardcoded
    // const findBook = await Book.find({
    //     author: "J. R. R. Tolkien"
    // })

    const successResponse = {
        message: "Book found: Success",
        findBook: findBook,
    };

    response.send(successResponse);
})


// app.get("/cats", (request, response) => {
//     response.send("Hello from Cats route!")
// })

// Body snippet
// {
//     "title": "",
//     "author": " ",
//     "genre": ""
//   }

// =====Create new book route=====
// POST: Post new information to the DB
// Use the 'body' in thunderclient to post new objects to DB
// Post maps to CREATE
// request.body can be set as parameters as long as the body is same as model
// If there are defaults, you don't need to set them in body
app.post("/books/addbook", async (request, response) => {
    const newBook = await Book.create(request.body)

        // Alternate method
    // const newBook = await Book.create({
    //     title: request.body.title,
    //     author: request.body.author,
    //     genre: request.body.genre,
    // });

    const successResponse = {
        message: "Added to DB: Success",
        newBook: newBook,
    };

    response.send(successResponse);
})

// =====Delete one route=====
// DELETE: Removes specified information
// DELETE maps to... delete!

// Body can be used to delete

app.delete("/books/removebook", async (request, response) => {
    const removeABook = await Book.deleteOne({title: request.body.title})
    // Body snippet:
        // {
        // "title": "booktitle"
        // }

    // Hardcoded
    // const removeBook = await Book.deleteOne({
    //     title: "Matilda 2"
    // });

// Would have had to hardcode an array to loop through without DB
    // const filter = request.body.id
    //     for (let i = 0; i < otherBooks.length; i++) {
    //         if (otherBooks[i].id == filter){
    //             otherBooks.splice(i, 1)
    //             break
    //         }
    //     }

    const successResponse = {
        message: "Book remove: Success",
        removeBook: removeBook
    }
    response.send(successResponse)
})

// =====Delete many route=====
app.delete("/books/removeauthor", async (request, response) => {
    const removeAuthor = await Book.deleteMany({author: request.body.author})
    // Hardcoded
    // const removeMany = await Book.deleteMany({
    //     author: "J. R. R. Tolkein"
    // })

    const successResponse = {
        message: "Removed books: Success",
        removeAuthor: removeAuthor
    }
    response.send(successResponse)

});

// =====Update one route=====
// PUT: Create/update specified information
// Calling it several times successfully has no side effects unlike multiple post requests
// Put maps to UPDATE

// Can use body to update using dynamic variable
// Dynamic method
app.put("/books/updatebook", async (request, response) => {
    const filterObj = {title: request.body.title}
    const updateObj = {[request.body.updateKey]: request.body.updateValue}

    const updatedObj = await Book.updateOne(filterObj, updateObj)

        const successResponse = {
        message: "Book updated: Success",
        updatedObj: updatedObj
    }
    response.send(successResponse)
})
// // Body snippet:
// {
//     "title": "", // Search DB for the object to change by title or other key in model
//     "updateKey": "", // title, author, genre etc
//     "updateValue": "" // What the NEW key value is
// }

// Hardcoded method
// app.put("/books/updatebook", async (request, response) => {
//     const upBook = await Book.updateOne({
//         title: "Matilda"
//     },
//     {
//         title: "Charlie and the Chocolate Factory"
//     })
//     const successResponse = {
//         message: "Book updated: Success",
//         upBook: upBook
//     }
//     response.send(successResponse)
// })

app.listen(5001, () => console.log(`Server is listening on port ${port}`));

// =====Errors encountered so far=====
// ERROR: Refused by server: Server may not be live. Restart server
// ERROR: Connection forcibly closed: Check if object being posted is unique. Restart server
// ERROR: Connection forcibly closed: Check if variables are the same. Restart server