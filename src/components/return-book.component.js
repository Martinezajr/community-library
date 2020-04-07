import React, { Component } from 'react';
import Axios from 'axios';  
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ReturnBook extends Component {
    constructor(props) {
        super(props);

        //this.deleteBook = this.deleteBook.bind(this);
        //this.returnBook = this.returnBook.bind(this);
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
    render() {
        return (
            <div>
            <Carousel>
                <div>
                    <img src="http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>,

            <div>
                <h1>Carousel</h1>
            </div>
            </div>
        )
    }
}