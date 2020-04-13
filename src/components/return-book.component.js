import React, { Component } from 'react';
import Axios from 'axios';  
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h3>{count}</h3>
    </div>
  );
}

const Details = props => (
    <tr>
        {//<td> <img src= "http://images.amazon.com/images/P/0753804700.01.LZZZZZZZ.jpg" > </img> </td>
        }
        <td><img src={props.book.image_url_l}  alt={props.book.title} /> </td>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.publication_year}</td>
        <td>{props.book.isbn}</td>
        <td>{props.book.copies}</td>
        <td>
            <Link to={"/show/"+props.book._id}>Details</Link> | <a href="#" onClick={() => { props.deleteBook(props.book._id) }}>Delete</a> | <a href="#" onClick={() => { props.returnBook(props.book._id) }}>Return</a> |<a href="#" onClick={() => { props.borrowBook(props.book._id) }}>Borrow</a> 
        </td>
        <td>
            
        <button onClick={() => props.book.copies= 1}>
        Click me
      </button>
        </td>
    </tr>
)

export default class ReturnBook extends Component {
    constructor(props) {
        super(props);
        this.bookList = this.bookList.bind(this);
        //this.deleteBook = this.deleteBook.bind(this);
        //this.returnBook = this.returnBook.bind(this);
        //this.onChangeTitle = this.onChangeTitle.bind(this);
        //this.onChangeAuthor = this.onChangeAuthor.bind(this);
        //this.onChangeYear = this.onChangeYear.bind(this);
        //this.onChangeIsbn = this.onChangeIsbn.bind(this);
        //this.onChangeCopies = this.onChangeCopies.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book: []
            
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/books/show/'+this.props.match.params.id)
            .then(response => {
                    this.setState ({ book: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    bookList() {
        
            return <Details book={this.state.book} deleteBook={this.deleteBook} returnBook={this.returnBook} borrowBook={this.borrowBook} />;
        
    }

    render() {
        return (
            <div>
                <h3>{this.state.book.title} </h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                            <th>Copies{this.state.book.copies}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        // this method takes information from books array and puts it into the rows
                        }
                        { this.bookList() }
                    </tbody>
                </table>
            </div>
        )
    }
}