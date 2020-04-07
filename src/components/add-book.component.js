import React, { Component } from 'react';
import axios from 'axios';

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
            copies: 0
        
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
            copies: e.target.value
        });
    }

    
    onSubmit(e) {
        e.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            publication_year: this.state.publication_year,
            isbn: this.state.isbn,
            copies: this.state.copies
        }

        console.log(book);

        axios.post('http://localhost:5000/books/add', book)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Book Record</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            />
                    </div>

                    <div className="form-group">
                        <label>Author: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                            />
                    </div>

                    <div className="form-group">
                        <label>Year of Publication: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.publication_year}
                            onChange={this.onChangeYear}
                            />
                    </div>

                    <div className="form-group">
                        <label>ISBN: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.isbn}
                            onChange={this.onChangeIsbn}
                            />
                    </div>

                    <div className="form-group">
                        <label>Copies: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.copies}
                            onChange={this.onChangeCopies}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Book to Library" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}