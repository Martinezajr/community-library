import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class AddBook extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeIsbn = this.onChangeIsbn.bind(this);
        this.onChangeCopies = this.onChangeCopies.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            title: '',
            author: '',
            publication_year: 0,
            isbn: '',
            copies: 0,
            available: 0
        
        }
    }

    //componentDidMount() {
    // loads before page
   

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            publication_year: e.target.value
        });
    }

    onChangeIsbn(e) {
        this.setState({
            isbn: e.target.value
        });
    }

    onChangeCopies(e) {
        this.setState({
            copies: e.target.value,
            available : e.target.value
        });
    }

   

    
    onSubmit(e) {
        e.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            publication_year: this.state.publication_year,
            isbn: this.state.isbn,
            copies: this.state.copies,
            available: this.state.available
        }

        console.log(book);

        axios.post('http://localhost:5000/books/add', book)
            .then(res => console.log(res.data));

       
        window.location = '/community-library/';
    }

    render() {
        return (
            <div className = 'container ' style = {{backgroundColor : 'white', border : "10px solid black", borderRadius : '10px'}}>

                <h3 bordered>Create New Book Record</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label><strong>Title: </strong></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            placeholder="Please enter the books title..."/>
                    </div>

                    <div className="form-group">
                        <label><strong>Author: </strong></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                            placeholder="Please enter the books author..."
                            />
                    </div>

                    <div className="form-group">
                        <label><strong>Year of Publication: </strong></label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.publication_year}
                            onChange={this.onChangeYear}
                            min = '0'

                            />
                    </div>

                    <div className="form-group">
                        <label><strong>ISBN: </strong></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.isbn}
                            onChange={this.onChangeIsbn}
                            placeholder="Please enter the books ISBN..."
                            />
                    </div>

                    <div className="form-group">
                        <label><strong>Copies: </strong></label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.copies, this.state.available }
                            onChange={this.onChangeCopies}
                            min = '0'
                            />
                    </div>


                    <div className="form-group">
                        <Button  type="submit"  > Add Book to Library </ Button >
                    </div>
                </form>
            </div>
        )
    }
}