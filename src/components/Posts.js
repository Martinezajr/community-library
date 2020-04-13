import React, { useState, useEffect } from 'react'; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Axios from 'axios';
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


// Create Copies function with state ( Look at BL2 )
// Iniside Copies function, use effect the books copies from posts using map
// Set copies after return or borrow, prolly put inside where posts at 




  return (
    <Table responsive bordered striped hover >
      <thead className='thead-light flex-table text-align-center'>
                        <tr>
                            <th className='text-align-center' >Image</th>
                            <th className = 'text-align-center'>Title</th>
                            <th>Author</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                            <th>Copies</th>
                        </tr>
                    </thead>
                    <tbody>

      {posts.map(post => (
        <tr key={post.id} className="bordered">
           
        {//<td> <img src= {post.image_url_m}> </img> </td>
        }
        <td className = 'img'><img src={post.image_url_s}  alt={post.title} /> </td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>{post.publication_year}</td>
        <td>{post.isbn}</td>
        <td>{post.copies}</td>
        <td className = 'btn-group col'>
            <Link to={"/show/"+post._id}><Button variant = 'info'>Details</Button></Link> {' '}
            <Button  disabled display = 'inline-block' variant = 'danger' href = '#' onClick = {() => { deleteBook(post._id) }} >Delete</Button> {' '} 
            <Button  display = 'inline-block' variant = 'success' href="#" onClick={() => { returnBook(post._id) }}>Return</Button> {' '}
            <Button className = 'text-white'  display = 'inline-block' variant = 'warning' href="#" onClick={() => { borrowBook(post._id) }}>Borrow</Button> {' '}
        </td>
        
    </tr>
        
      ))}
      </tbody>
    </Table>
  );
};

export default Posts;
