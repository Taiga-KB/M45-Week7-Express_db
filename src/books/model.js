// ODM: Object Document Mapper
// Mongoose converts JS to mongodb

// NoSQL: No sequel database

// Book:
//     id: string
//     title: string   
//     author: string
//     genre: string

const mongoose = require("mongoose");
// Schema is a class, bookSchema is an instance of that class
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author : {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },

});

const Book = mongoose.model("book", bookSchema);
// This Book uses bookSchema
module.exports = Book;
// Export the Book and can now be used within code