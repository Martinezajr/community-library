const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
        title: { type: String, required: true },
        author: { type: String, required: true },
        publication_year: { type: Number, required: true },
        isbn: { type: String, required: true },
        copies: { type: Number, required: true },
        available : { type: Number}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;