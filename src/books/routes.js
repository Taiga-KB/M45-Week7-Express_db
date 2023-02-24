// Routes for Books
// Seperating the routes and the logic

const { Router } = require("express");
const bookRouter = Router();

// Imported Controller functions
const { getAllBooks,
        findABook,
        addBook,
        updateBook,
        deleteBook,
        testBook,
        deleteAll, 
    } = require("./controllers");

// First argument is string of URL, Second is a function callback
bookRouter.get("/books/findallbooks", getAllBooks)
bookRouter.get ("/books/findbook" , findABook)

bookRouter.post("/books/addnew", addBook)

bookRouter.delete("/books/remove", deleteBook)
bookRouter.delete("/books/removeall", deleteAll)

bookRouter.put("/books/update", updateBook)

// req.params testing
bookRouter.get("/books/search/:title", testBook)
    
module.exports = bookRouter;