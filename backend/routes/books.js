const router = require('express').Router();
let Book = require('../models/book.model');

// when goes to "books/" sends get request, get lights
router.route('/').get((req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err))
});

// adds book through required attributes
router.route('/add').post((req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const publication_year = req.body.publication_year;
    const isbn = req.body.isbn;
    const copies = req.body.copies;
    const available = req.body.copies;

    const newBook = new Book({
        title,
        author,
        publication_year,
        isbn,
        copies,
        available
    });

    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// gets specific book info by DB id
router.route('/show/:id').get((req,res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

// deletes specific book
router.route('/delete/:id').delete((req,res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(book => res.json("Book Deleted"))
    .catch(err => res.status(400).json('Error: ' + err));
});

// return book function, adds count by 1
router.route('/return/:id').post((req,res) => {
    Book.findByIdAndUpdate(req.params.id)
    .then(book => {
        book.available = book.available + 1;

        book.save()
        .then(() => res.json('Book Returned!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// borrow function, lowers copy count by 1
router.route('/borrow/:id').post((req,res) => {
    Book.findByIdAndUpdate(req.params.id)
    .then(book => {
        book.available = book.available - 1;

        book.save()
        .then(() => res.json('Book Borrowed!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;