import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import MyNav from "./components/navbar.component";
import Book from "./components/book.component";
import AddBook from "./components/add-book.component";
import BooksListTwo from "./components/BookListTwo";

function App() {
  return (
    
    <Router>
      
      <div >
      <MyNav /> 
      <br />
      <Route path ="/community-library/" exact component = {BooksListTwo} />
      <Route path = "/show/:id" component = {Book} />
      <Route path = "/add" component = {AddBook} />
    
      </div>
      
    </Router>
  );
}

export default App;
