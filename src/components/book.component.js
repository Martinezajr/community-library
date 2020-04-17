import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Details = props => (
    
    <tr>
        {//<td> <img src= "http://images.amazon.com/images/P/0753804700.01.LZZZZZZZ.jpg" > </img> </td>
        }
        <td><Image src={props.book.image_url_l}  alt={props.book.title} fluid /> </td>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.publication_year}</td>
        <td>{props.book.isbn}</td>
        <td>{props.book.available}</td>
        
    </tr>
)

export default class Book extends Component {

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
                <h1 style = {{  backgroundColor : "white", border : "10px solid black",borderRadius : '5px', fontFamily: 'Libre Baskerville'}}>{this.state.book.title} </h1>
                <Table size fluid  bordered striped hover style = {{backgroundColor : 'white', border : "10px solid black", borderRadius : '10px'}} >
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
                </Table>
            </div>
        )
    }
}