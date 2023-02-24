// All the Logic is here
// Control the operations

const Book = require("./model");

// =====Find All Books=====
const getAllBooks = async (request, response) => {
    const allBooks = await Book.find({})

    const successResponse = {
        message: "All books found: Success",
        allBooks: allBooks,
    };
    response.send(successResponse);
};

// =====Find Books by Author=====
const findABook = async (request, response) => {
    const findBook = await Book.find({author: request.body.author})

    const successResponse = {
        message: "Book found: Success",
        findBook: findBook,
    };
    response.send(successResponse);
};

// =====Post a new Book=====
const addBook = async (request, response) => {
    const newBook = await Book.create(request.body)
 
    const successResponse = {
        message: "Added book to DB: Success",
        newBook: newBook,
    };
    response.send(successResponse);
};

// =====Delete a Book=====
const deleteBook = async (request, response) => {
    const removeBook = await Book.deleteOne({title: request.body.title})

    const successResponse = {
        message: "Remove book: Success",
        removeBook: removeBook
    }
    response.send(successResponse)
};

// =====Delete all Books=====
const deleteAll = async (request, response) => {
    const removeAll = await Book.deleteMany({})

    const successResponse = {
        message: "Removed books: Success",
        removeAll: removeAll
    };
    response.send(successResponse)
};

// =====Update a Book=====
const updateBook = async (request, response) => {
    const filterObj = {title: request.body.title}
    const updateObj = {[request.body.updateKey]: request.body.updateValue}

    const updatedObj = await Book.updateOne(filterObj, updateObj)

        const successResponse = {
        message: "Book updated: Success",
        updatedObj: updatedObj
    }
    response.send(successResponse)
};

// =====req.params testing=====
const testBook = async (request, response) => {
    console.log(request.params.title);
    const findBook = await Book.find({title: request.params.title})
    response.send(findBook);

};

// =====Export Functions=====
module.exports = {
    getAllBooks,
    findABook,
    addBook,
    deleteBook,
    deleteAll,
    updateBook,
    testBook,
};