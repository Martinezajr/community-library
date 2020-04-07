import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// Book function component 
// Takes in book property and uses its attributes
const Book = props => (
    <tr>
        {//<td> <img src= {props.book.image_url_m}> </img> </td>
        }
        <td><img src={props.book.image_url_s}  alt={props.book.title} /> </td>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.publication_year}</td>
        <td>{props.book.isbn}</td>
        <td>{props.book.copies}</td>
        <td>
            <Link to={"/show/"+props.book._id}>Details</Link> | <a href="#" onClick={() => { props.deleteBook(props.book._id) }}>Delete</a> | <a href="#" onClick={() => { props.returnBook(props.book._id) }}>Return</a> |<a href="#" onClick={() => { props.borrowBook(props.book._id) }}>Borrow</a> 
        </td>
    </tr>
) 

export default class BooksList extends Component {

    constructor(props) {
        super(props);

        this.deleteBook = this.deleteBook.bind(this);
        this.returnBook = this.returnBook.bind(this);
        //this.onChangeTitle = this.onChangeTitle.bind(this);
        //this.onChangeAuthor = this.onChangeAuthor.bind(this);
        //this.onChangeYear = this.onChangeYear.bind(this);
        //this.onChangeIsbn = this.onChangeIsbn.bind(this);
        //this.onChangeCopies = this.onChangeCopies.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            books: []
            
        }
    }

    // Loads JSON from Database
    componentDidMount() {
        Axios.get('http://localhost:5000/books/')
            .then(response => {
                    this.setState ({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteBook(id) {
        Axios.delete('http://localhost:5000/books/delete/'+id)
            .then(res => console.log(res.data));
        
            //Might need to make other function/ see 1:35:45
            //To filter 0 copies

            //el.copies !== 0
        this.setState ({
            books: this.state.books.filter(el => el._id !== id)
        })
    }

    returnBook(id) {
        Axios.post('http://localhost:5000/books/return/'+id)
            .then(res => console.log(res.data));


        
        window.location='/'
    }

    borrowBook(id) {
        Axios.post('http://localhost:5000/books/borrow/'+id)
            .then(res => console.log(res.data));
        
        window.location='/'
    }

    bookList() {
        return this.state.books.map(currentbook => {
            return <Book book={currentbook} deleteBook={this.deleteBook} returnBook={this.returnBook} borrowBook={this.borrowBook} key={currentbook._id}/>;
        })
    }
    
    render() {     
        return (
            <div>
                <h3>Books!</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                            <th>Copies</th>
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