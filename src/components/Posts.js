import React, { useState, useEffect } from 'react'; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'

//SAME AS BOOK COMPONENT
const Posts = ({ posts, loading }) => {

  
  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const deleteBook = (id) => {
    
    Axios.delete('http://localhost:5000/books/delete/'+id)
        .then(res => console.log(res.data));
    
        //Might need to make other function/ see 1:35:45
        //To filter 0 copies

        //el.copies !== 0
    
    posts = posts.filter(el => el._id !== id)
    
    window.location = ('/community-library/')
    
    
}

const returnBook = ( id) => {
  Axios.post('http://localhost:5000/books/return/'+id)
      .then(res => console.log(res.data));


  // refresh page
  // might change to just re render view DOM with react
  window.location = ('/community-library/')
}

const borrowBook = (id) => {
  Axios.post('http://localhost:5000/books/borrow/'+id)
      .then(res => console.log(res.data));
  
  window.location='/community-library/'
}

const available = (post) => {
  
  if (post.available == 0){
    return "Unavailable"
  }
  return post.available
}

const borrowCheck = ( post) => {

  if (post.available == 0) {

    return <Button className = 'text-white'  display = 'inline-block' variant = 'warning' href="#" onClick={() => { borrowBook(post._id) }} disabled >Copy Unavailable</Button> 
  }
  return <Button className = 'text-white'  display = 'inline-block' variant = 'warning' href="#" onClick={() => { borrowBook(post._id) }} style = {{ paddingTop: '15px'}} >Borrow</Button> 
}

const returnCheck = ( post) => {

  if (post.available == post.copies) {

    return <Button   variant = 'success' href="#" onClick={() => {  returnBook(post._id) }} disabled>All Books Stocked!</Button>
  }
  return <Button   variant = 'success' href="#" onClick={() => {  returnBook(post._id) }} style = {{ paddingTop: '15px'}} >Return</Button>
}


// Create Copies function with state ( Look at BL2 )
// Iniside Copies function, use effect the books copies from posts using map
// Set copies after return or borrow, prolly put inside where posts at 




  return (
    <Table size fluid  bordered striped hover style = {{backgroundColor : 'white', border : "10px solid black", borderRadius : '10px'}}>
      <thead className='thead-light flex-table text-align-center fixed-header'>
                        <tr>
                            <th className='text-align-center'><strong>Image</strong></th>
                            <th className = 'text-align-center'><strong>Title</strong></th>
                            <th><strong>Author</strong></th>
                            <th><strong>Year of Publication</strong></th>
                            <th><strong>ISBN</strong></th>
                            <th><strong>Copies Available</strong></th>
                            <th><strong>Services</strong></th>
                        </tr>
                    </thead>
                    <tbody>

      {posts.map(post => (
      
        
        <tr key={post.id} className="bordered">
           
          
        <td ><Image src={post.image_url_s}  alt={post.title} fluid /> </td>
        <td><strong>{post.title}</strong></td>
        <td><strong>{post.author}</strong></td>
        <td><strong>{post.publication_year}</strong></td>
        <td><strong>{post.isbn}</strong></td>
        <td><strong>{available(post)}</strong></td>
        <td >
            <Col>
            <ButtonGroup className = 'justify-content-center' style ={{ textAlign : 'center', margin : 'auto', padding : '0px'}}>
            <Button variant = 'info'><Link to={"/show/"+post._id} className= 'btn' style = {{ color: 'white'}}>Details</Link></Button> {' '}
            <Button  variant = 'danger' href = '#' onClick = {() => { deleteBook(post._id) }} style = {{ paddingTop: '15px'}}  >Delete</Button> {' '}
            {returnCheck(post)}  
            {borrowCheck(post)}

            </ButtonGroup>
            </Col>
        </td>
        
        
    </tr>
        
      ))}
      </tbody>
    </Table>
  );
};

export default Posts;
