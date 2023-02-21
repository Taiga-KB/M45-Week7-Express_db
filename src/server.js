const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();

// Get / Post / Put / Delete

// Task: Update the object of a book? Delete a book?

// URL: Uniform Resource Locator: Domain/book/
// Route for different web pages
app.use("/", express.static("cats"));

app.use(express.json());

// GET: Fetches requested information
app.get("/book", (request, response) => {
    // console.log(request)
    // response.send("Hello from the book route!")
    const book = {
        title: "Lord of the Rings",
        author: "J.R R. Tolkein",
        genre: "Fantasy",
    };

    const successResponse = {
        message: "Response sent successfully",
        book: book,
    };

    response.send(successResponse);
})

// Get requests don't have bodies
// app.get("/cats", (request, response) => {
//     response.send("Hello from Cats route!")
// })
// Body snippet
// {
//     "title": "Matilda",
//     "author": "Roald Dahl",
//     "genre": "Childrens"
//   }

// POST: Post new information to the DB
app.post("/book", (request, response) => {
    // console.log(request.body);
    // response.send("Hello from the post route!")

    const newBook = {
        id: Math.floor(Math.random() * 50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    };

    const successResponse = {
        message: "Successfully added to DB",
        newBook: newBook,
    };

    response.send(successResponse);
})

// DELETE: Removes specified information
app.delete("/book", (request, response) => {
    const otherBooks = [
        {
            id: "1",
            title: "Lord of the Rings",
            author: "J.R R. Tolkein",
            genre: "Fantasy",
        },

        {
            id: "2",
            title: "Something",
            author: "Jimmy",
            genre: "Horror",
        }
    ]
    console.log(otherBooks)

    const filter = request.body.id
        for (let i = 0; i < otherBooks.length; i++) {
            if (otherBooks[i].id == filter){
                otherBooks.splice(i, 1)
                break
            }
        }
    console.log(otherBooks)

    const successResponse = {
        message: "Book successfully removed",
        otherBooks: otherBooks
    }
    response.send(successResponse)
})

// PUT: Create/update specified information
// Calling it several times successfully has no side effects unlike multiple post requests

app.put("/book", (request, response) => {
    const moreBooks = {
        
        id: "2",
        title: "Something",
        author: "Jimmy",
        genre: "Horror",
    }

    // const updateBook =

    const successResponse = {
        message: "Book updated successfully",
        morebooks: moreBooks
    }
    response.send(successResponse)
})

app.listen(5001, () => console.log("Server is listening on port 5001"));