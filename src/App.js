import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import Book from "./components/book.component";
import BorrowBook from "./components/borrow-book.component";
import ReturnBook from "./components/return-book.component";
import AddBook from "./components/add-book.component";
import BooksListTwo from "./components/BookListTwo";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar /> 
      <br />
      <Route path ="/community-library/" exact component = {BooksListTwo} />
      <Route path = "/show/:id" component = {Book} />
      <Route path = "/borrow/:id" component = {BorrowBook} />
      <Route path = "/return/:id" component = {ReturnBook} />
      <Route path = "/add" component = {AddBook} />
    
      </div>
      
    </Router>
  );
}

export default App;
